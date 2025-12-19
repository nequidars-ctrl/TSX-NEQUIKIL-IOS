import axios, {AxiosInstance, AxiosError} from 'axios';
import {API_CONFIG, HTTP_HEADERS, ERROR_MESSAGES, SECURITY_CONFIG} from '../config/constants';

export interface LoginResponse {
  success: boolean;
  token?: string;
  sessionId?: string;
  username?: string;
  userId?: string;
  error?: string;
}

export interface UserProfile {
  id: string;
  phoneNumber: string;
  name?: string;
  email?: string;
  balance?: number;
}

class AuthServiceClass {
  private api: AxiosInstance;
  private loginAttempts: number = 0;
  private lastAttemptTime: number = 0;

  constructor() {
    this.api = axios.create({
      baseURL: API_CONFIG.BASE_URL,
      timeout: API_CONFIG.TIMEOUT,
      headers: {
        'Content-Type': HTTP_HEADERS.CONTENT_TYPE_JSON,
        Accept: HTTP_HEADERS.ACCEPT_JSON,
        'User-Agent': HTTP_HEADERS.USER_AGENT,
        'X-Api-Version': HTTP_HEADERS.X_API_VERSION,
      },
    });

    this.api.interceptors.response.use(
      response => response,
      error => this.handleApiError(error),
    );
  }

  private isAccountLocked(): boolean {
    if (this.loginAttempts >= SECURITY_CONFIG.MAX_LOGIN_ATTEMPTS) {
      const timeSinceLastAttempt = Date.now() - this.lastAttemptTime;
      if (timeSinceLastAttempt < SECURITY_CONFIG.LOCKOUT_DURATION) {
        return true;
      } else {
        this.loginAttempts = 0;
        return false;
      }
    }
    return false;
  }

  private handleApiError(error: AxiosError): Promise<never> {
    if (error.code === 'ECONNABORTED') {
      return Promise.reject(new Error(ERROR_MESSAGES.TIMEOUT_ERROR));
    }
    if (!error.response) {
      return Promise.reject(new Error(ERROR_MESSAGES.NETWORK_ERROR));
    }
    return Promise.reject(error);
  }

  async login(phoneNumber: string, password: string): Promise<LoginResponse> {
    try {
      if (this.isAccountLocked()) {
        return {
          success: false,
          error: ERROR_MESSAGES.AUTH.ACCOUNT_LOCKED,
        };
      }

      const normalizedPhone = this.normalizePhoneNumber(phoneNumber);
      
      this.loginAttempts = 0;
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      return {
        success: true,
        token: 'mock-jwt-token-' + Date.now(),
        sessionId: 'session-' + Date.now(),
        username: normalizedPhone,
        userId: 'user-' + normalizedPhone,
      };

    } catch (error) {
      const axiosError = error as AxiosError;
      this.loginAttempts++;
      this.lastAttemptTime = Date.now();

      if (axiosError.response) {
        const status = axiosError.response.status;
        let errorMessage = ERROR_MESSAGES.UNKNOWN_ERROR;

        switch (status) {
          case 401:
            errorMessage = ERROR_MESSAGES.AUTH.INVALID_CREDENTIALS;
            break;
          case 403:
            errorMessage = ERROR_MESSAGES.AUTH.ACCOUNT_LOCKED;
            break;
          case 404:
            errorMessage = 'Servicio no encontrado';
            break;
          case 500:
            errorMessage = ERROR_MESSAGES.SERVER_ERROR;
            break;
          default:
            errorMessage = `Error ${status}: ${axiosError.response.statusText}`;
        }

        return {
          success: false,
          error: errorMessage,
        };
      } else if (axiosError.request) {
        return {
          success: false,
          error: ERROR_MESSAGES.NETWORK_ERROR,
        };
      } else {
        return {
          success: false,
          error: axiosError.message || ERROR_MESSAGES.UNKNOWN_ERROR,
        };
      }
    }
  }

  async logout(): Promise<boolean> {
    try {
      this.loginAttempts = 0;
      return true;
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      return false;
    }
  }

  async validateSession(token: string): Promise<boolean> {
    try {
      return true;
    } catch (error) {
      return false;
    }
  }

  async getUserProfile(token: string): Promise<UserProfile | null> {
    try {
      return null;
    } catch (error) {
      console.error('Error al obtener perfil:', error);
      return null;
    }
  }

  private normalizePhoneNumber(phone: string): string {
    return phone.replace('+57', '').replace(/\s/g, '').replace(/-/g, '').trim();
  }
}

export const AuthService = new AuthServiceClass();
