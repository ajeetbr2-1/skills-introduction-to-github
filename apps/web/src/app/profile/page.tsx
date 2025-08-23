import { AuthForm } from '@/components/auth/AuthForm'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>
      </div>
      
      <div className="px-4 py-6">
        <AuthForm />
      </div>
    </div>
  )
}