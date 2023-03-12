import React from 'react'

import '../styles/views-tech/views.tech.css'

const TechSlide = () => {
  return (
    <section className='main__slide --tech-slide' id='tech-slide'>
      <flex-wrapper class='slide-tech__f-wrapper'>
        <h2 className='f-wrapper__slide-header'>Tech</h2>

        <section className='--tech-slide-section'>
          <h3 className='--tech-slide-section-header'>Languages</h3>
          <flex-wrapper class='lang-section__f-wrapper'>
            {['JavaScript', 'TypeScript', 'Python', 'C#'].map(lang => (
              <p key={lang} className='f-wrapper__lang-item'>{lang}</p>
            ))}
          </flex-wrapper>
        </section>

        <flex-item class='f-wrapper__f-item-tools'>
          <section className='--tech-slide-section'>
            <h3 className='--tech-slide-section-header'>Front End</h3>
              <flex-wrapper class='tools-section__f-wrapper'>
                {['ReactJS', 'NextJS', 'CSS'].map(lang => (
                  <p key={lang} className='f-wrapper__lang-item'>{lang}</p>
                ))}
              </flex-wrapper>
          </section>
          <section className='--tech-slide-section'>
            <h3 className='--tech-slide-section-header'>Back End</h3>
            <flex-wrapper class='tools-section__f-wrapper'>
              {['NodeJS', '.NET', 'Express', 'Flask', 'Docker'].map(lang => (
                <p key={lang} className='f-wrapper__lang-item'>{lang}</p>
              ))}
            </flex-wrapper>
          </section>
          <section className='--tech-slide-section'>
            <h3 className='--tech-slide-section-header'>Database</h3>
            <flex-wrapper class='tools-section__f-wrapper'>
              {['MongoDB', 'PostgreSQL', 'SQLite'].map(lang => (
                <p key={lang} className='f-wrapper__lang-item'>{lang}</p>
              ))}
            </flex-wrapper>
          </section>
          <section className='--tech-slide-section'>
            <h3 className='--tech-slide-section-header'>Other</h3>
            <flex-wrapper class='tools-section__f-wrapper'>
              {['Agile Work Methods', 'AWS Lightsail', 'Netlify', 'Figma', 'Git'].map(lang => (
                <p key={lang} className='f-wrapper__lang-item'>{lang}</p>
              ))}
            </flex-wrapper>
          </section>
        </flex-item>
      </flex-wrapper>
      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis cumque maiores earum mollitia dolores excepturi sed commodi quam, reprehenderit soluta natus ipsam quibusdam impedit doloremque delectus quisquam aspernatur incidunt consequuntur consequatur accusantium eaque officia culpa! Sed voluptatem doloremque modi quia nobis veritatis quasi? Dolorem reprehenderit facere eligendi iure velit dicta, quod dolorum. Voluptates tempore temporibus vero quisquam, accusamus aliquam minima amet possimus sit natus nisi perspiciatis alias ea assumenda ex dignissimos magni explicabo itaque minus veritatis eveniet dolore dolor officia? Magnam, voluptatum nobis eaque quia dolores mollitia. A optio nesciunt architecto adipisci dolor quos, reprehenderit facilis modi. Voluptates, voluptas? Aliquam aliquid ipsa incidunt officia quos libero nostrum, voluptas aspernatur eos atque architecto rerum quisquam tempora autem excepturi enim iste, id corrupti nulla! Iste omnis error distinctio labore necessitatibus a totam ea sit perspiciatis magni nobis quia, iusto ad repellat, nisi nam sint voluptas eveniet temporibus eum et corrupti illo. Temporibus voluptatibus veniam, animi dolores esse vel vero mollitia in dignissimos doloremque ab excepturi dolorem, eaque cum soluta, officia nobis voluptate labore. Delectus modi doloribus eos vitae soluta id iure? Adipisci veniam quam laborum fugit quo ullam corporis rem ab dignissimos reiciendis ea, pariatur corrupti deserunt ex architecto quos. Sapiente, laboriosam.</div>
    </section>
  )
}

export default TechSlide