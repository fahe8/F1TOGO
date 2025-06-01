import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ image, icon: IconComponent, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg group relative"
    >
      {image && (
        <div className="relative h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute -bottom-6 left-6">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center ring-4 ring-white">
              <IconComponent className="text-xl text-white" />
            </div>
          </div>
        </div>
      )}
      
      {!image && IconComponent && (
        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto mt-6">
          <IconComponent className="text-2xl text-primary" />
        </div>
      )}
      
      <div className={`p-6 ${image ? 'pt-8' : 'pt-0'}}`}>
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default Card