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
    'ajai-01',
    'ajai-02',
    'ajai-03',
    'ajai-04',
    'ajai-05',
    'ajai-06',
    'ajai-07',
    'ajai-08',
    'ajai-09',
    'ajai-10',
    'ajai-11',
    'ajai-12',
    'ajai-13',
    'ajai-14',
    'ajai-15',
    'ajai-16',
    'ajai-17',
    'ajai-18',
    'ajai-19',
    'ajai-20',
    'ajai-21',
    'ajai-22',
    'ajai-23',
    'ajai-24',
    'ajai-25',
    'ajai-26',
    'ajai-27',
    'ajai-28',
    'ajai-29',
    'ajai-30',
    'ajai-31',
    'ajai-32',
    'ajai-33',
    'ajai-34',
    'ajai-35',
    'ajai-36',
    'ajai-37',
    'ajai-38',
    'ajai-39',
    'ajzs-01',
    'ajzs-02',
    'ajzs-03',
    'ajzs-04',
    'ajzs-05',
    'ajzs-06',
    'ajzs-07',
    'ajzs-08',
    'ajzs-09',
    'ajzs-10',
    'ajzs-11',
    'ajzs-12',
    'ajzs-13',
    'ajzs-14',
    'ajzs-15',
    'ajzs-16',
    'ajzs-17',
    'ajzs-18',
    'ajzs-19',
    'ajzs-20',
    'ajzs-21',
    'ajzs-22',
    'ajzs-23',
    'ajzs-24',
    'ajzs-25',
    'ajzs-26',
    'ajzs-27',
    'ajzs-28',
    'ajzs-29',
    'ajzs-30',
    'ajrp-01',
    'ajrp-02',
    'ajrp-03',
    'ajrp-04',
    'ajrp-05',
    'ajrp-06',
    'ajrp-07',
    'ajrp-08',
    'ajrp-09',
    'ajrp-10',
    'ajrp-11',
    'ajrp-12',
    'ajrp-13',
    'ajrp-14',
    'ajrp-15',
    'ajrp-16',
    'ajrp-17',
    'ajrp-18',
    'ajrp-19',
    'ajrp-20',
    'ajrp-21',
    'ajrp-22',
    'ajrp-23',
    'ajrp-24',
    'ajrp-25',
    'ajrp-26',
    'ajrp-27',
    'ajrp-28',
    'ajrp-29',
    'ajrp-30',
    'ajrp-31',
    'ajlr-01',
    'ajlr-02',
    'ajlr-03',
    'ajlr-04',
    'ajlr-05',
    'ajlr-06',
    'ajlr-07',
    'ajlr-08',
    'ajlr-09',
    'ajlr-10',
    'ajlr-11',
    'ajlr-12',
    'ajlr-13',
    'ajlr-14',
    'ajlr-15',
    'ajlr-16',
    'ajlr-17',
    'ajlr-18',
    'ajlr-19',
    'ajlr-20',
    'ajlr-21',
    'ajlr-22',
    'ajlr-23',
    'ajlr-24',
    'ajlr-25',
    'ajlr-26',
    'ajlr-27',
    'ajlr-28',
    'ajlr-29',
    'ajlr-30',
    'ajlr-31',
    'ajs-01',
    'ajs-02',
    'ajs-03',
    'ajs-04',
    'ajs-05',
    'ajs-06',
    'ajs-07',
    'ajs-08',
    'ajs-09',
    'ajs-10',
    'ajs-11',
    'ajs-12',
    'ajs-13',
    'ajs-14',
    'ajs-15',
    'ajs-16',
    'ajs-17',
    'ajs-18',
    'ajs-19',
    'ajs-20',
    'ajs-21',
    'ajs-22',
    'ajs-23',
    'ajs-24',
    'ajs-25',
    'ajs-26',
    'ajs-27',
    'ajs-28',
    'ajs-29',
    'ajs-30',
    'ajs-31',
    'ajs-32',
    'ajs-33',
    'ajbp-01',
    'ajbp-02',
    'ajbp-03',
    'ajbp-04',
    'ajbp-05',
    'ajbp-06',
    'ajbp-07',
    'ajbp-08',
    'ajbp-09',
    'ajbp-10',
    'ajbp-11',
    'ajbp-12',
    'ajbp-13',
    'ajbp-14',
    'ajbp-15',
    'ajbp-16',
    'ajbp-17',
    'ajbp-18',
    'ajbp-19',
    'ajbp-20',
    'ajbp-21',
    'ajbp-22',
    'ajbp-23',
    'ajbp-24',
    'ajbp-25',
    'ajbp-26',
    'ajbp-27',
    'ajbp-28',
    'ajbp-29',
    'ajbp-30',
    'ajpe-01',
    'ajpe-02',
    'ajpe-03',
    'ajpe-04',
    'ajpe-05',
    'ajpe-06',
    'ajpe-07',
    'ajpe-08',
    'ajpe-09',
    'ajpe-10',
    'ajpe-11',
    'ajpe-12',
    'ajpe-13',
    'ajpe-14',
    'ajpe-15',
    'ajpe-16',
    'ajpe-17',
    'ajpe-18',
    'ajpe-19',
    'ajpe-20',
    'ajpe-21',
    'ajpe-22',
    'ajpe-23',
    'ajpe-24',
    'ajpe-25',
    'ajpe-26',
    'ajpe-27',
    'ajpe-28',
    'ajpe-29',
    'ajpe-30',
    'ajpe-31',
    'ajpe-32',
    'ajpe-33',
    'ajpe-34',
    'ajpe-35',
    'ajpe-36',
    'ajpe-37',
    'ajpe-38',
    'ajpe-39',
    'ajpe-40',
    'ajpe-41',
    'ajpe-42',
    'ajpe-43',
    'ajpe-44',
    'ajpe-45',
    'ajpe-46',
    'ajpe-47',
    'ajpe-48',
    'ajkc-01',
    'ajkc-02',
    'ajkc-03',
    'ajkc-04',
    'ajkc-05',
    'ajkc-06',
    'ajkc-07',
    'ajkc-08',
    'ajkc-09',
    'ajkc-10',
    'ajkc-11',
    'ajkc-12',
    'ajkc-13',
    'ajkc-14',
    'ajzb-01',
    'ajzb-02',
    'ajzb-03',
    'ajzb-04',
    'ajzb-05',
    'ajzb-06',
    'ajzb-07',
    'ajzb-08',
    'ajzb-09',
    'ajzb-10',
    'ajzb-11',
    'ajzb-12',
    'ajzb-13',
    'ajzb-14',
    'ajzb-15',
    'ajzb-16',
    'ajzb-17',
    'ajzb-18',
    'ajzb-19',
    'ajzb-20',
    'ajzb-21',
    'ajzb-22',
    'ajzb-23',
    'ajzb-24',
    'ajzb-25',
  ];

  for (const slug of slugs) {
    try {
      const { data } = await axios.get(
        `https://asimjofa.com/products/${slug}.js`,
      );

      const product = await prisma.product.findUnique({
        where: { title: data.title },
      });

      if (product) continue;

      await prisma.product.create({
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
