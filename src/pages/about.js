import React from "react"
import {graphql} from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link } from "gatsby";

import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

export default function about({ data }) {
  return (
    <Layout>
      <SEO title="About" />
      
      <div className="container mx-auto my-10 px-5">
     
      {/* <Breadcrumb location={location} crumbLabel="About" /> */}
      <div className="container mx-auto">
                <div className="flex md:flex-nowrap flex-wrap mt-10 mb-5 items-center">
                    <div className="labs-hero-left md:w-3/5 w:1/1 md:p-0 p-5">
                        {/* <h3 className="font-black md:text-2xl text-xl">{data.strapiAbout.heroText}</h3> */}
                        <h3 className="font-black md:text-2xl text-xl">We are a Barcelona based startup building data products and digital tools for a global audience of non-profits, businesses, startups, and multilateral organisations</h3>
                        
                        
                    </div>
                    <div className="labs-hero-right md:w-2/5 flex justify-end">
                  {/* <img src={sectionHeroImg} alt="" /> */}
                  <StaticImage src="../assets/product-streams/home_hero.svg" placeholder="blurred" alt="Platformable"/> 
                    </div>
                </div>
      </div>
      </div>

      <section className="OurMission pt-5 our-mission-bg">
        <div className="container mx-auto pb-5 md:px-0 px-5">
          <h3 className="font-black text-center md:text-2xl text-xl">Our Mission</h3>
          <h4 className="text-center md:text-2xl text-xl">We support <span className="">open ecosystems</span> that:</h4>

          <div className="our-mission-cards-container grid md:grid-cols-3 grid-cols-1 md:gap-24 gap-4 my-5">

          <div className="our-mission-card grid  justify-center rounded-xl shadow p-5 bg-white">
                <div className="our-mission-image grid justify-center items-center p-3">
                <StaticImage src="../static/about/our-mission/build.png" alt="platformable" className="img-thumbnail"/>
                </div>
                <p>Build economic opportunities</p>
            </div>

            <div className="our-mission-card grid  justify-center rounded-xl shadow p-5 bg-white">
                <div className="our-mission-image grid justify-center items-center p-3">
                <StaticImage src="../static/about/our-mission/solve.png" alt="platformable" className="img-thumbnail"/>
                </div>
                <p>Solve complex problems</p>
            </div>

            <div className="our-mission-card grid justify-center rounded-xl shadow p-5 bg-white">
                <div className="our-mission-image grid justify-center items-center p-3">
                <StaticImage src="../static/about/our-mission/enable.png" alt="platformable" className="img-thumbnail"/>
                </div>
                <p>Enable everyone to participate </p>
                <p>and co-create their own value</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-clients mt-10 mb-5">
        <div className="container mx-auto pb-12 md:px-28 px-5">
          <h3 className="text-center font-black my-5 md:text-2xl text-xl">Current and previous clients</h3>

          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5 items-center">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <img src="https://www.alias.dev/_nuxt/img/logo_codeislaw.50d16e1.png" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md">We work with ALIAS.dev on resources that encourage the growth of a data privacy and protection workforce and tech ecosystem</p>
            </div>
          </div>

         
          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5 items-center">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="https://www.apidays.global/wp-content/uploads/2020/05/logo-v2-2.png.webp" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md">We worked with apidays Global to enhance a dataset and create an interactive tool that documents the landscape of API tools providers enabling ecosystem development</p>
            </div>
          </div>

         
          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5 items-center">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="../static/about/clients/axway.png" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md">We worked with Axway API management provider on a range of data reports and content products</p>
            </div>
          </div>

          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5 items-center">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="../static/about/clients/blackHealth.png" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5 flex items-center">
                <p className="text-sm md:text-md ">We work with National Black Leadership Commission on Health (Black Health) to support  their platform-approach by supporting data governance projects, data stewardship training, learning management systems, and integrated websites</p>
            </div>
          </div>
          

          <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5 items-center">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <StaticImage src="../static/about/clients/cgap.png" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md">We work with the World Bank’s Consultative Group to Assist the Poor (CGAP) to demonstrate the value of open APIs for financial inclusion</p>
            </div>
          </div>
        </div>
      </section>


      <section className="commitment">
        <div className="container mx-auto">
        <h3 className="text-center font-black my-5 md:text-2xl text-xl">Our commitment...</h3>

        <div className="commitment-container grid md:grid-cols-2 grid-cols-1">
          <div className="commitment-left px-10 commitment-left-borders py-5">
              <div className="commitment-left-top">
                <div className="flex justify-center items-center my-5 gap-4">
                <StaticImage src="../static/about/our-commitment/open source icon.png" alt="platformable" className="img-md-thumbnail"/>
                <h4 className="font-black text-center md:text-lg text-sm">...To open source <br />  and open ecosystems</h4>
                <StaticImage src="../static/about/our-commitment/open ecosystem icon.png" alt="platformable" className="img-md-thumbnail"/>
                </div>
                  <p className="mb-1 md:text-md text-sm">We donate/volunteer a percentage
                  of our work projects to open source
                  projects and we select open source
                  technologies where we can.</p>
                  <p className="mb-1 md:text-md text-sm">We allocate internal team time on
                  building content and products that
                  can be shared in the open.</p>
                                  <p className="mb-1 md:text-md text-sm">We offer a 10% discount on our project
                  pricing to open source community
                  organisations and non-profits.</p>
                                  <p className="mb-5">We are building partnerships with
                  organisations that work on reducing
                  health inequalities and we look for
                  opportunities to extend our industry
                  knowledge in support of vanguards
                  working in this area.</p>            
              </div>
            </div>
            <div className="commitment-right px-10 commitment-right-borders py-5">
              <div className="commitment-right-top">
              <div className="flex justify-center items-center my-5 gap-4">
              <StaticImage src="../static/about/our-commitment/diversity icon.png" alt="platformable" className="img-md-thumbnail"/>
              <h4 className="font-black text-center md:text-lg text-sm">...To diversisty <br /> and equity</h4>
              
              <StaticImage src="../static/about/our-commitment/equity icon.png" alt="platformable" className="img-md-thumbnail"/>
              </div>
              <p className="mb-1 md:text-md text-sm">We are an LGBT-owned startup committed to hiring a diverse workforce that represents all of us who are not traditionally prioritised when building communities, products or services.
</p>
                <p className="mb-1 md:text-md text-sm">We collect data on the participation and work of businesses that are women-led and have diverse management and we ensure that when we discuss the role of open ecosystems we give representation to these businesses. We ensure that when we discuss open ecosystems we reflect on whether they are supporting the needs of all market segments and use case needs.</p>
                <p className="mb-1">We collect metrics that measure
the capacity for open ecosystems
to ensure participation from
under-represented populations
and whether the value of open
ecosystem models is distributed to
all stakeholder groups equitably.</p>            
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-policy my-16">
        <div className="container mx-auto md:px-0 px-5">
          <h3 className="md:text-2xl text-xl text-center mb-8">Privacy Policy</h3>
          <p className="text-center  text-sm">Platformable is committed to managing people´s data responsibly.</p>
          <p className="text-center">Check out our <Link to="/privacy-policy" className="border-b-2">Privacy Policy</Link></p>
        </div>

      </section>

      <section className="privacy-policy my-16">
        <div className="container mx-auto md:px-0 px-5">
       
        <div className="about-client-box md:flex gap-4 my-5 md:px-0 px-5 items-center">
            <div className="about-client-box-image md:w-1/5 w-full md:mb-0 mb-5">
            <img src="https://migracode.openculturalcenter.org/wp-content/uploads/2020/10/Migracode-Barcelona-Logo-Transparant.png" alt="Platformable client" className="img-thumbnail"/>
            </div>
            <div className="about-client-box-text md:w-4/5">
                <p className="text-sm md:text-md">Platformable is a proud signatory to the <a href="https://barcelonadigitaltalent.com/bcn-inclusive-coding/" className="external-link"target="_blank">Barcelona Inclusive Coding agreement</a>. We hire our development team via MigraCode and have established a trainee-to-employment pathway for recent graduates to help early career developers from diverse backgrounds to enter the labour market.</p>
            </div>
          </div>
        </div>

      </section>



      <section className="our-team our-mission-bg py-10 ">
        <h3 className="font-black md:text-2xl text-xl text-center mb-4">
          Platformable's Team
        </h3>
        <div className="container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-3 md:px-28 px-5">

          {data.strapiAbout.Author.map((userauthor, index) => {
            return userauthor.user.map((x, ind) => {
              return (
                <div
                  key={ind}
                  className=" pt-5 rounded overflow-hidden   bg-gray-50 w-1/1 shadow"
                >
      
                   <div className="flex justify-center">
                    <GatsbyImage image={getImage(x.image)} className="my-0 img-thumbnail" alt="Platformable team"/>
                    </div>

                  <div className="p-4 md:p-6 md:block md:px-5 px-5">
                    <div className="flex gap-4 items-center mb-5 justify-center ">
                    {/* <GatsbyImage image={getImage(x.position_icon)} alt="Platformable Team"/> */}
                    <div>
                    <h3 className="font-black text-lg text-center leading-tight sm:leading-normal md:text-sm">
                      {`${x.name} ${x.lastname}`}
                    </h3>
                   
                    <p className="text-xs text-center italic font-black">{x.position}</p>
                    {x.pronoun && <p className="text-xs text-center">{x.pronoun}</p>}
                    </div>
                    </div>
                    <div className="text-sm">
                      <div
                        className="leading-none text-xs"
                        dangerouslySetInnerHTML={{ __html: x.bio }}
                      ></div>
                    </div>
                  </div>

                </div>
              )
            })
          })}
        </div>
      </section>

    </Layout>
  )
}

export const query = graphql`
  query MyAbout{
    strapiAbout {
      heroText
      Author {
        id
        user {
          name
          lastname
          position
          pronoun
          image {
            childImageSharp {
              gatsbyImageData(width:320, blurredOptions: {width: 100}, placeholder: BLURRED)
            }
          }
          bio
          position_icon {
            childImageSharp {
              gatsbyImageData(width:32, blurredOptions: {width: 100}, placeholder: BLURRED)
            }
          }
        }
      }
      teamTitle
      content
    }
  }
`
