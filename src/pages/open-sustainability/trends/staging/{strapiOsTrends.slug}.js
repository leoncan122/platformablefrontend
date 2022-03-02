import React,{useEffect,useState} from "react";
import Layout from "../../../../components/layout";
import { StaticImage } from "gatsby-plugin-image"
import Trends2Cols from "../../../../components/Trends2Cols";
import Trends3ColsComponent from "../../../../components/Trends3ColsComponent";
import Trends2colsrwider from "../../../../components/Trends2ColsRwider";
import Trends1Col from "../../../../components/Trends1Col";
import SEO from "../../../../components/seo";
import TrendsMainImageOnLeftTextOnTheRight from "../../../../components/TrendsMainImageOnLeftTextOnTheRight";
import TrendsExecutiveSummaryComponent from "../../../../components/TrendsExecutiveSummaryComponent";

const StagingTrendsPage = ({location,href }) => {

  const [data,setData]=useState([])


  const OsTrendsReportId=location.pathname

  let result = OsTrendsReportId.replace("/open-sustainability/trends/staging/", "/");

const getTypeOfComponent = (section,index)=> {


  if(section.__component==="trends-reports.2columns"){
    return <Trends2Cols section={section} index={index} location={location.href}/>
  }

  if(section.__component==="trends-reports.3-columns"){
    return <Trends3ColsComponent section={section} index={index} location={location.href}/>
  }

  if(section.__component==="trends-reports.2-columns-right-side-bigger"){
    return <Trends2colsrwider section={section} index={index} location={location.href}/>
  }

  if(section.__component==="trends-reports.main-image-on-left-text-on-the-right"){
    return <TrendsMainImageOnLeftTextOnTheRight section={section} index={index} location={location.href}/>
  }
  if(section.__component==="trends-reports.1-column"){
    return <Trends1Col section={section} index={index} location={location.href}/>
  }

  if(section.__component==="trends-reports.executive-summary"){
    return <TrendsExecutiveSummaryComponent section={section} index={index} location={location.href}/>
  }
  
  
}



  const getTrendsReport = ()=>{
    fetch(`https://websiteserver-ds7cf.ondigitalocean.app/os-trends${result}`)
  //fetch(`http://localhost:1337/os-trends${result}`)
  .then(res =>  res.json())
  .then(response =>  setData(response))
}

    useEffect(()=>{
      getTrendsReport()
    },[])



   
  return (
    <Layout>
      <SEO title={data.title} img={data?.featured_image?.url}  />
      <section
        className=" md:my-5 my-5 sm:mx-auto md:px-0 px-5 md:py-5 py-2 bg-green-50 md:h-screen" /* style={{backgroundColor:"#0099bb"}} */
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 px-0 md:px-3 lg:px-0 xl:px-3 items-center  h-100">
            <div className="left flex items-center">
              <div>
                <h3 className="font-bold mb-5 md:text-5xl text-3xl md:text-left text-center">{data.title}</h3>
       
                <div dangerouslySetInnerHTML={{ __html: data.excerpt }}></div>
            {/*     <a
            className={`md:inline-block inline-block 
            text-sm md:text-primary 
            font-bold my-5 ml-2 bg-russian-violet-dark text-white py-2 px-10 rounded-full 
            hover:bg-secondary cursor-pointer`}
            href="#"
            download="Platformable Open Banking Trends Report Q1 2022 January 2022">
            Download Report
          </a> */}
              </div>
            </div>
            <div className="right flex justify-end">
              <StaticImage
                src="../../../static/os/main_hero_img.png"
                alt="platformable"
                width={800}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="trends-content">
        <div className="">
            {data?.Sections?.map((section,index)=>{
              return getTypeOfComponent(section,index)
            })}
        </div>
      </section>


      <section className="trends-content">
        <div className="text-center">
       {/*  <a
            className={`md:inline-block inline-block 
            text-sm md:text-primary 
            font-bold my-5 ml-2 bg-russian-violet-dark text-white py-2 px-10 rounded-full 
            hover:bg-secondary cursor-pointer`}
            href="#"
            download="Platformable Open Banking Trends Report Q1 2022 January 2022">
            Download
          </a> */}
        </div>
      </section>
    </Layout>
  )
};



export default StagingTrendsPage;
