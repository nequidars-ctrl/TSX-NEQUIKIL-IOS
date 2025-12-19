export const API_CONFIG = {
  BASE_URL: 'https://api.nequi.com.co',
  BASE_URL_BACKUP: 'https://api-backup.nequi.com.co',
  
  AUTH: {
    LOGIN: '/api/v1/auth/login',
    LOGOUT: '/api/v1/auth/logout',
    REFRESH_TOKEN: '/api/v1/auth/refresh',
    VALIDATE_SESSION: '/api/v1/auth/validate',
  },
  
  USER: {
    PROFILE: '/api/v1/user/profile',
    BALANCE: '/api/v1/user/balance',
    TRANSACTIONS: '/api/v1/user/transactions',
  },
  
  PAYMENTS: {
    SEND_MONEY: '/api/v1/payments/send',
    REQUEST_MONEY: '/api/v1/payments/request',
    PAY_SERVICE: '/api/v1/payments/service',
  },
  
  TIMEOUT: 30000,
  SESSION_TIMEOUT: 30 * 60 * 1000,
};

export const APP_CONFIG = {
  APP_NAME: 'Nequi',
  APP_VERSION: '1.0.0',
  
  PHONE_NUMBER: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 10,
    COUNTRY_CODE: '+57',
    REGEX: /^[0-9]{10}$/,
  },
  
  DYNAMIC_KEY: {
    LENGTH: 6,
    REFRESH_INTERVAL: 30000,
    EXPIRY_TIME: 60000,
  },
  
  COLORS: {
    PRIMARY: '#DA0081',
    SECONDARY: '#200020',
    BACKGROUND: '#37195B',
    WHITE: '#FFFFFF',
    ERROR: '#F44336',
    SUCCESS: '#4CAF50',
    WARNING: '#FF9800',
    GRAY_LIGHT: '#F5F5F5',
    GRAY_MEDIUM: '#CCCCCC',
    GRAY_DARK: '#666666',
    PINK_LIGHT: '#FFB6D1',
    PINK_ULTRA_LIGHT: '#FFE0F1',
    INPUT_BACKGROUND: '#FFFFFF15',
  },
};

export const BIOMETRY_CONFIG = {
  ENABLED: true,
  TYPES: {
    FINGERPRINT: 'fingerprint',
    FACE_ID: 'face-id',
    IRIS: 'iris',
  },
};

export const SECURITY_CONFIG = {
  MAX_LOGIN_ATTEMPTS: 3,
  LOCKOUT_DURATION: 15 * 60 * 1000,
  PASSWORD_MIN_LENGTH: 4,
  PASSWORD_MAX_LENGTH: 6,
  ENCRYPTION_ENABLED: true,
  ENCRYPTION_ALGORITHM: 'AES-256',
};

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Error de conexión. Verifica tu internet e intenta nuevamente.',
  SERVER_ERROR: 'Error del servidor. Intenta más tarde.',
  TIMEOUT_ERROR: 'La solicitud tardó demasiado. Intenta nuevamente.',
  UNKNOWN_ERROR: 'Ocurrió un error inesperado.',
  
  AUTH: {
    INVALID_CREDENTIALS: 'Credenciales incorrectas',
    ACCOUNT_LOCKED: 'Cuenta bloqueada. Contacta a soporte.',
    SESSION_EXPIRED: 'Tu sesión ha expirado. Inicia sesión nuevamente.',
    INVALID_PHONE: 'Número de teléfono inválido',
    PHONE_REQUIRED: 'El número de teléfono es requerido',
  },
  
  VALIDATION: {
    REQUIRED_FIELD: 'Este campo es requerido',
    INVALID_FORMAT: 'Formato inválido',
    MIN_LENGTH: 'Longitud mínima no alcanzada',
    MAX_LENGTH: 'Longitud máxima excedida',
  },
};

export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: '¡Bienvenido a Nequi!',
  LOGOUT_SUCCESS: 'Sesión cerrada correctamente',
  TRANSACTION_SUCCESS: 'Transacción exitosa',
};

export const HTTP_HEADERS = {
  CONTENT_TYPE_JSON: 'application/json',
  ACCEPT_JSON: 'application/json',
  USER_AGENT: 'NequiMobileApp/1.0.0',
  X_REQUESTED_WITH: 'XMLHttpRequest',
  X_API_VERSION: 'v1',
};

export const STORAGE_KEYS = {
  AUTH_TOKEN: '@nequi:auth_token',
  SESSION_ID: '@nequi:session_id',
  USER_DATA: '@nequi:user_data',
  BIOMETRY_ENABLED: '@nequi:biometry_enabled',
  PHONE_NUMBER: '@nequi:phone_number',
  REMEMBER_ME: '@nequi:remember_me',
};
