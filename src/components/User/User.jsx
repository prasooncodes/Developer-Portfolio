import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams()
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-800 font-medium text-xl tracking-wide rounded-2xl shadow-md">
      User: {id}
    </div>
    
  )
}

export default User
