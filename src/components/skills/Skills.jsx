import { Typescript } from './icons/typescript'
import { Javascript } from './icons/javascript'
import { Html } from './icons/html'
import { Css } from './icons/css'
import { Bootstrap } from './icons/Bootstrap'
import { Docker } from './icons/Docker'
import { Git } from './icons/Git'
import { Github } from './icons/Github'
import { Jest } from './icons/jest'
import { Mysql } from './icons/mysql'
import { NextJS } from './icons/next'
import { NodeJS } from './icons/node'
import { Npm } from './icons/npm'
import { Php } from './icons/php'
import { PostgreSql } from './icons/postgre'
import { React } from './icons/react'
import { Tailwind } from './icons/tailwind'
import { Visual } from './icons/visual'
import { Yarn } from './icons/yarn'

export function Skills() {
  return (
    <div className="skills__container">
      <div className="skills__content">
        <h1 className='skills_title'>
          Minhas <span>Habilidades</span>
        </h1>

        <div className="skills__techs">
          <Typescript />
          <Javascript />
          <Html />
          <Css />
          <Bootstrap />
          <Docker />
          <Git />
          <Github />
          <Jest />
          <Mysql />
          <NextJS />
          <NodeJS />
          <Npm />
          <Php />
          <PostgreSql />
          <React />
          <Tailwind />
          <Visual />
          <Yarn />
        </div>
      </div>
    </div>
  )
}
