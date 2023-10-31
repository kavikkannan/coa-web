import React from 'react'

const bodyl = () => {
  return (
    <div className="body-container  min-h-screen">
      <section className="hero-section text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Binary Arithmetic</h1>
        <p className="text-lg  mb-4">Explore the fundamental operations of binary numbers in computer organization.</p>
        <img src="/binary_operations_image.jpg" alt="Binary Operations" className="mx-auto mb-8" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </section>

      <section className="operations-section text-center py-10">
        <h2 className="text-2xl font-bold mb-8">Binary Operations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className=" p-6 rounded shadow-md">
            <h3 className="text-lg font-bold mb-2">Binary Addition</h3>
            <p>Learn and perform addition in binary.</p>
            {/* Input fields and operation functionality */}
          </div>
          <div className=" p-6 rounded shadow-md">
            <h3 className="text-lg font-bold mb-2">Binary Subtraction</h3>
            <p>Discover and execute subtraction in binary format.</p>
            {/* Input fields and operation functionality */}
          </div>
          <div className=" p-6 rounded shadow-md">
            <h3 className="text-lg font-bold mb-2">Binary Multiplication</h3>
            <p>Master the multiplication of binary numbers.</p>
            {/* Input fields and operation functionality */}
          </div>
          <div className=" p-6 rounded shadow-md">
            <h3 className="text-lg font-bold mb-2">Binary Division</h3>
            <p>Explore division within the binary numeral system.</p>
            {/* Input fields and operation functionality */}
          </div>
        </div>
      </section>

      <section className="about-section text-center py-10">
        <h2 className="text-2xl font-bold mb-4">About Binary Arithmetic</h2>
        <p className="text-lg text-green-600">Understand the significance and application of binary arithmetic in computer systems. Explore its history, relevance in digital circuits, and practical examples.</p>
      </section>

      
    </div>
  )
}

export default bodyl