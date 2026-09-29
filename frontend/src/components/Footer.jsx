
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-12 py-12 mt-16">

      <div className="max-w-6xl mx-auto">

       
        <div className="flex gap-5 mb-8">
          <span className="text-xl cursor-pointer hover:text-white">
            Facebook
          </span>

          <span className="text-xl cursor-pointer hover:text-white">
            Instagram
          </span>

          <span className="text-xl cursor-pointer hover:text-white">
            Twitter
          </span>

          <span className="text-xl cursor-pointer hover:text-white">
            YouTube
          </span>
        </div>

     
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-8">

          <div className="flex flex-col gap-3">
            <a href="#">Audio and Subtitles</a>
            <a href="#">Media Center</a>
            <a href="#">Privacy</a>
            <a href="#">Contact Us</a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#">Audio Description</a>
            <a href="#">Investor Relations</a>
            <a href="#">Legal Notices</a>
            <a href="#">Help Center</a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#">Gift Cards</a>
            <a href="#">Jobs</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Terms of Use</a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#">Ways to Watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Account</a>
            <a href="#">FAQ</a>
          </div>

        </div>

    
        <button className="border border-gray-500 px-4 py-2 text-sm hover:text-white hover:border-white">
          Service Code
        </button>

        <p className="text-xs mt-6">
          © 2026 Netflix Clone. Built for learning purposes.
        </p>

      </div>

    </footer>
  )
}

export default Footer

