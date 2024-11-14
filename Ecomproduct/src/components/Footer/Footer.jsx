import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="relative w-full bg-gray-900 text-white py-6 mx-auto border">
        <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
              <div className="space-x-4">
                <Link to="/" className="hover:text-gray-400">About Us</Link>
                <Link to="/" className="hover:text-gray-400">Contact Us</Link>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
