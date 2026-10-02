export type TributeStatus = 'pending' | 'approved'

export interface TributeEntry {
  id: string
  name: string
  relationship: string
  message: string
  submittedAt: string
  status: TributeStatus
}

const TRIBUTES_KEY = 'monica-memorial-tributes'
const ADMIN_SALT_KEY = 'monica-memorial-admin-salt'
const ADMIN_HASH_KEY = 'monica-memorial-admin-hash'
const ADMIN_SESSION_KEY = 'monica-memorial-admin-session'

function isTributeEntry(value: unknown): value is TributeEntry {
  if (!value || typeof value !== 'object') return false
  const entry = value as Partial<TributeEntry>
  return typeof entry.id === 'string'
    && typeof entry.name === 'string'
    && typeof entry.relationship === 'string'
    && typeof entry.message === 'string'
    && typeof entry.submittedAt === 'string'
    && (entry.status === 'pending' || entry.status === 'approved')
}

export function readTributes(): TributeEntry[] {
  try {
    const stored = window.localStorage.getItem(TRIBUTES_KEY)
    if (!stored) return []
    const parsed: unknown = JSON.parse(stored)
    return Array.isArray(parsed) ? parsed.filter(isTributeEntry) : []
  } catch {
    return []
  }
}

export function saveTributes(entries: TributeEntry[]): boolean {
  try {
    window.localStorage.setItem(TRIBUTES_KEY, JSON.stringify(entries))
    return true
  } catch {
    return false
  }
}

export function hasAdminPassphrase(): boolean {
  try {
    return Boolean(window.localStorage.getItem(ADMIN_SALT_KEY) && window.localStorage.getItem(ADMIN_HASH_KEY))
  } catch {
    return false
  }
}

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('')
}

async function hashPassphrase(passphrase: string, salt: string): Promise<string> {
  const data = new TextEncoder().encode(`${salt}:${passphrase}`)
  const digest = await window.crypto.subtle.digest('SHA-256', data)
  return bytesToHex(new Uint8Array(digest))
}

export async function createAdminPassphrase(passphrase: string): Promise<boolean> {
  try {
    const salt = bytesToHex(window.crypto.getRandomValues(new Uint8Array(16)))
    const hash = await hashPassphrase(passphrase, salt)
    window.localStorage.setItem(ADMIN_SALT_KEY, salt)
    window.localStorage.setItem(ADMIN_HASH_KEY, hash)
    return true
  } catch {
    return false
  }
}

export async function verifyAdminPassphrase(passphrase: string): Promise<boolean> {
  try {
    const salt = window.localStorage.getItem(ADMIN_SALT_KEY)
    const expectedHash = window.localStorage.getItem(ADMIN_HASH_KEY)
    return Boolean(salt && expectedHash && await hashPassphrase(passphrase, salt) === expectedHash)
  } catch {
    return false
  }
}

export function isAdminSessionActive(): boolean {
  try {
    return window.sessionStorage.getItem(ADMIN_SESSION_KEY) === 'active'
  } catch {
    return false
  }
}

export function setAdminSessionActive(active: boolean): boolean {
  try {
    if (active) window.sessionStorage.setItem(ADMIN_SESSION_KEY, 'active')
    else window.sessionStorage.removeItem(ADMIN_SESSION_KEY)
    return true
  } catch {
    return false
  }
}