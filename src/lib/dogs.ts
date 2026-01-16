import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface DogData {
  name: string;
  gender: string;
  breed: string;
  age: string;
  appearance: string;
  location?: string;
  image: string;
  isCat?: boolean;
  order?: number;
  personality: string;
}

export function getAllDogs(): DogData[] {
  const dogsDirectory = path.join(process.cwd(), 'public', 'dogs');
  
  // Check if directory exists
  if (!fs.existsSync(dogsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(dogsDirectory);
  const dogs = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const filePath = path.join(dogsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        name: data.name || 'Unknown',
        gender: data.gender || 'TBD',
        breed: data.breed || 'Indie',
        age: data.age || 'TBD',
        appearance: data.appearance || 'TBD',
        location: data.location,
        image: data.image || '/dogs/default.jpg',
        isCat: data.isCat || false,
        order: data.order || 999,
        personality: content.trim() || 'TBD',
      } as DogData;
    })
    .sort((a, b) => (a.order || 999) - (b.order || 999));

  return dogs;
}
