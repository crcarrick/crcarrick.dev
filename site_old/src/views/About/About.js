import React from 'react'

import { getImage } from 'gatsby-plugin-image'

import { Hero } from '~/components/Hero'
import { Layout } from '~/views/Layout'

import * as S from './About.style'

export const About = ({ data, path }) => {
  if (process.env.NODE_ENV === 'production') {
    return (
      <Layout>
        <Hero type="construction" />
      </Layout>
    )
  }

  const { profilePicture, miloPicture /* siteMetadata */ } = data

  return (
    <Layout path={path} seoTitle="About">
      <S.Article>
        <h2>Hello!</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sapiente debitis sit fugit.
          Aliquid unde corrupti molestiae fugiat, modi adipisci! Eaque, minus provident? Alias earum
          nesciunt quam quaerat consequatur modi! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
          <S.Image image={getImage(profilePicture)} alt="Me!" />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis velit hic ratione,
          expedita reprehenderit debitis recusandae, quia quod placeat magni repellat eligendi. Rem
          odio officiis esse, ut vero consectetur eum! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Blanditiis velit hic ratione, expedita reprehenderit debitis recusandae,
          quia quod placeat magni repellat eligendi. Rem odio officiis esse, ut vero consectetur
          eum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis velit hic
          ratione, expedita reprehenderit debitis recusandae, quia quod placeat magni repellat
          eligendi. Rem odio officiis esse, ut vero consectetur eum!
          <S.Image image={getImage(miloPicture)} alt="Me!" />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis velit hic ratione,
          expedita reprehenderit debitis recusandae, quia quod placeat magni repellat eligendi. Rem
          odio officiis esse, ut vero consectetur eum! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Blanditiis velit hic ratione, expedita reprehenderit debitis recusandae,
          quia quod placeat magni repellat eligendi. Rem odio officiis esse, ut vero consectetur
          eum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis velit hic
          ratione, expedita reprehenderit debitis recusandae, quia quod placeat magni repellat
          eligendi. Rem odio officiis esse, ut vero consectetur eum!
          <S.Image image={getImage(profilePicture)} alt="Me!" />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis velit hic ratione,
          expedita reprehenderit debitis recusandae, quia quod placeat magni repellat eligendi. Rem
          odio officiis esse, ut vero consectetur eum! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Blanditiis velit hic ratione, expedita reprehenderit debitis recusandae,
          quia quod placeat magni repellat eligendi. Rem odio officiis esse, ut vero consectetur
          eum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis velit hic
          ratione, expedita reprehenderit debitis recusandae, quia quod placeat magni repellat
          eligendi. Rem odio officiis esse, ut vero consectetur eum!
          <S.Image image={getImage(miloPicture)} alt="Me!" />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis velit hic ratione,
          expedita reprehenderit debitis recusandae, quia quod placeat magni repellat eligendi. Rem
          odio officiis esse, ut vero consectetur eum! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Blanditiis velit hic ratione, expedita reprehenderit debitis recusandae,
          quia quod placeat magni repellat eligendi. Rem odio officiis esse, ut vero consectetur
          eum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis velit hic
          ratione, expedita reprehenderit debitis recusandae, quia quod placeat magni repellat
          eligendi. Rem odio officiis esse, ut vero consectetur eum!
        </div>
      </S.Article>
    </Layout>
  )
}
