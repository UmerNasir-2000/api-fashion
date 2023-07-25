import { PrismaClient } from '@prisma/client';
import axios from 'axios';
const prisma = new PrismaClient();

async function main() {
  console.log('Hello from Seeder!!!');

  const slugs = [
    'ajjm-01',
    'ajjm-02',
    'ajjm-03',
    'ajjm-04',
    'ajjm-05',
    'ajjm-06',
    'ajjm-07',
    'ajjm-08',
    'ajjm-09',
    'ajjm-10',
    'ajjm-11',
    'ajjm-12',
    'ajjm-13',
    'ajjm-14',
    'ajjm-15',
    'ajhj-01',
    'ajhj-02',
    'ajhj-03',
    'ajhj-04',
    'ajhj-05',
    'ajhj-06',
    'ajhj-07',
    'ajhj-08',
    'ajhj-09',
    'ajhj-10',
    'ajhj-11',
    'ajhj-12',
    'ajhj-13',
    'ajhj-14',
    'ajhj-15',
    'ajhj-16',
    'ajhj-17',
    'ajhj-18',
    'ajhj-19',
    'ajhj-20',
    'ajhj-21',
    'ajhj-22',
    'ajhj-23',
    'ajhj-24',
    'ajhj-25',
    'ajjd-01',
    'ajjd-02',
    'ajjd-03',
    'ajjd-04',
    'ajjd-05',
    'ajjd-06',
    'ajjd-07',
    'ajjd-08',
    'ajjd-09',
    'ajjd-10',
    'ajjd-11',
    'ajjd-12',
    'ajjd-13',
    'ajjd-14',
    'ajjd-15',
    'ajmq-01',
    'ajmq-02',
    'ajmq-03',
    'ajmq-04',
    'ajmq-05',
    'ajmq-06',
    'ajmq-07',
    'ajmq-08',
    'ajmq-09',
    'ajmq-10',
    'ajmq-11',
    'ajmq-12',
    'ajkm-01',
    'ajkm-02',
    'ajkm-03',
    'ajkm-04',
    'ajkm-05',
    'ajkm-06',
    'ajkm-07',
    'ajkm-08',
    'ajkm-09',
    'ajkm-10',
    'ajkm-11',
    'ajkm-12',
    'ajkm-13',
    'ajkm-14',
    'ajkm-15',
    'ajkm-16',
    'ajkm-17',
    'ajkm-18',
    'ajkm-19',
    'ajkm-20',
  ];
  for (const slug of slugs) {
    try {
      const { data } = await axios.get(
        `https://asimjofa.com/products/${slug}.js`,
      );

      if (data) {
        const product = await prisma.product.create({
          data: {
            available: data.available,
            vendor: data.vendor,
            price: data.price,
            slug: data.handle,
            title: data.title,
            description: data.description,
            images: data.images,
            tags: data.tags,
            type: data.type,
          },
        });
      }
    } catch (error) {
      console.log(`Not found slug with id = ${slug}`);
      continue;
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
