'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { DogData } from '@/lib/dogs';

export default function DogsPage() {
  const [dogs, setDogs] = useState<DogData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDogs() {
      try {
        const response = await fetch('/api/dogs');
        const data = await response.json();
        setDogs(data);
      } catch (error) {
        console.error('Failed to load dogs:', error);
      } finally {
        setLoading(false);
      }
    }
    loadDogs();
  }, []);

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center text-amber-900">Loading...</div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-4 text-4xl font-bold text-amber-900">Our Dogs & Cats</h1>
        <p className="mb-12 text-lg text-amber-800">
          Meet the wonderful dogs and cats that call Ashoka University home. These furry friends 
          are an important part of our campus community.
        </p>
      </motion.div>

      <motion.div 
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05
            }
          }
        }}
      >
        {dogs.map((dog, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl bg-white/60 shadow-sm backdrop-blur-sm overflow-hidden group"
          >
            {/* Animal Image Placeholder */}
            <motion.div 
              className="relative h-40 w-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span 
                className="text-6xl"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                {dog.isCat ? '🐱' : '🐕'}
              </motion.span>
            </motion.div>
            
            {/* Animal Information */}
            <div className="p-4">
              <motion.h2 
                className="mb-3 text-xl font-bold text-amber-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {dog.name}
              </motion.h2>
              
              {dog.location && (
                <motion.p
                  className="mb-3 text-sm text-amber-700 flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span>📍</span> {dog.location}
                </motion.p>
              )}
              
              <Dialog>
                <DialogTrigger asChild>
                  <motion.button 
                    className="mb-3 w-full rounded-lg bg-amber-900 px-4 py-2 text-sm font-medium text-white"
                    whileHover={{ scale: 1.05, backgroundColor: '#78350f' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    Learn More
                  </motion.button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-amber-900">{dog.name}</DialogTitle>
                    <DialogDescription className="text-amber-800">
                      Learn more about {dog.name}
                    </DialogDescription>
                  </DialogHeader>
                  
                  {/* Detailed Information */}
                  <motion.div 
                    className="space-y-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Image Placeholder */}
                    <motion.div 
                      className="relative h-64 w-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center rounded-lg"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="text-8xl">{dog.isCat ? '🐱' : '🐕'}</span>
                    </motion.div>
                    
                    <motion.div 
                      className="space-y-3"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                    >
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        <h3 className="font-semibold text-amber-900">Gender</h3>
                        <p className="text-amber-800">{dog.gender}</p>
                      </motion.div>
                      
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        <h3 className="font-semibold text-amber-900">Breed</h3>
                        <p className="text-amber-800">{dog.breed}</p>
                      </motion.div>
                      
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        <h3 className="font-semibold text-amber-900">Age</h3>
                        <p className="text-amber-800">{dog.age}</p>
                      </motion.div>
                      
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        <h3 className="font-semibold text-amber-900">Appearance</h3>
                        <p className="text-amber-800">{dog.appearance}</p>
                      </motion.div>
                      
                      {dog.location && (
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 }
                          }}
                        >
                          <h3 className="font-semibold text-amber-900">Location</h3>
                          <p className="text-amber-800">{dog.location}</p>
                        </motion.div>
                      )}
                      
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        <h3 className="font-semibold text-amber-900">Personality & Story</h3>
                        <p className="text-amber-800 leading-relaxed">{dog.personality}</p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-8 text-center shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="mb-3 text-xl font-semibold text-amber-900">
          Want to Help?
        </h3>
        <p className="mb-6 text-amber-800">
          You can support our campus dogs by volunteering for feeding schedules, 
          donating supplies, or sponsoring their medical care.
        </p>
        <motion.a
          href="mailto:pawsitive@ashoka.edu.in"
          className="inline-block rounded-full bg-amber-900 px-8 py-3 font-medium text-white"
          whileHover={{ scale: 1.05, backgroundColor: '#78350f' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Contact Us to Help
        </motion.a>
      </motion.div>
    </main>
  );
}
