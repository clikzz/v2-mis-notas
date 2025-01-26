'use client';
import { signUp } from '@/app/actions';

export default function RegisterPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input id="confirmPassword" name="confirmPassword" type="password" required />
      <button formAction={signUp}>Sign up</button>
    </form>
  );
}
