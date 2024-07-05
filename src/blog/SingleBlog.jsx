import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Tags from '../shop/Tags'
import PopularPost from '../shop/PopularPost'
const socialList = [ { link: "#", iconName: "icofont-facebook", className: "facebook", }, { link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, { link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, ];

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList)
    const { id } = useParams()
    // console.log(id)

    const result = blog.filter((b) => b.id === Number(id))
    console.log(result)
    return (
        <div><PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />
            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className='col'>
                                            <div className='post-item style-2'>
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className='post-thumb'>
                                                                    <img src={item.imgUrl} alt="" className='w-100' />
                                                                </div>

                                                                <div className='post-content'>
                                                                    <h3>{item.title}</h3>
                                                                    <div className='meta-post'>
                                                                        <ul className='lab-ul'>
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}> <i className={val.iconName}></i>{val.text}</li>
                                                                                ))
                                                                            }
                                                                        </ul>

                                                                    </div>
                                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ut aut quibusdam a eius! Cupiditate quasi praesentium eum totam vel ipsum repellendus perferendis quaerat doloribus quidem molestiae nam, aliquid maiores eveniet dicta aliquam sapiente expedita distinctio libero eaque voluptatibus natus? Ex minima dolor in alias vitae autem consequuntur veniam, cum labore sit est, recusandae numquam, perspiciatis explicabo maiores architecto facilis?</p>

                                                                    <blockquote>
                                                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae reprehenderit placeat quidem quis fugit alias exercitationem fugiat esse autem maiores?</p>
                                                                        <cite>
                                                                            <a href="#">.....Melissa Hunter</a>
                                                                        </cite>
                                                                    </blockquote>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis voluptates molestiae temporibus, quos itaque provident eligendi ducimus harum, est nesciunt, vitae natus laudantium facere eos necessitatibus aliquid tempora quibusdam illum quaerat quae! Nostrum illum ipsam numquam accusamus, laudantium porro, sunt tempora ullam repellat vero nam expedita qui dolorem? Dolore, accusantium suscipit aliquam alias vel ex repudiandae recusandae et, cum odit saepe adipisci sapiente reiciendis debitis ducimus sit eligendi totam!</p>


                                                                    <img src="/src/assets/images/blog/single/01.jpg" alt="" />

                                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, quidem? Sequi similique impedit consequatur obcaecati est molestias deleniti assumenda! Ipsa a ad dolore modi sit, tempore quasi, ratione voluptatem ex, maxime blanditiis? Hic voluptatem aperiam officiis saepe repellendus sapiente consequatur molestiae. Fugiat aut cumque facilis dolorem voluptas officia doloremque impedit.</p>

                                                                    <div className='video-thumb'>
                                                                     <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                     <a href="https://youtu.be/NljIHlZRTTE?si=pO0NUdMd2_JXZ4s6" className='video-button popup'
                                                                    target="_blank"
                                                                     >
                                                                     <i className='icofont-ui-play'></i>
                                                                     </a>
                                                                    </div>

                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto repudiandae dolore incidunt porro tenetur quaerat velit quae inventore laudantium. Blanditiis modi nesciunt, ex cupiditate non, quo at ratione odit omnis exercitationem voluptatibus, velit deserunt vitae? Nostrum magnam dolorem aspernatur?</p>

                                                                    <div className='tags-section'>
                                                                        <ul className='tags lab-ul'>
                                                                            <li>
                                                                                <a href="#">Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Business</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Personal</a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className='lab-ul social-icons'>
                                                                            {
                                                                                socialList.map((val,i) =>(
                                                                                    <li key={i}>
                                                                                        <a href="#" className={val.className}>
                                                                                            <i className={val.iconName}></i>
                                                                                        </a>
                                                                                    </li>
                                                                                ))

                                                                            }
                                                                        </ul>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        ))
                                                    }
                                                </div>
                                            </div>

                                            <div className='navigations-part'>
                                                <div className='left'>
                                                    <a href="#" className='prev'>
                                                        <i className='icofont-double-left'></i>Preview Blog
                                                    </a>
                                                    <a href="#" className='title'>
                                                     Evisculate Parallel Processess via Technics Sound Models Authoritation
                                                    </a>
                                                </div>
                                                <div className='right'>
                                                    <a href="#" className='prev'>
                                                    Next Blog<i className='icofont-double-right'></i>
                                                    </a>
                                                    <a href="#" className='title'>
                                                     Evisculate Parallel Processess via Technics Sound Models Authoritation
                                                    </a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className='col-lg-4 col-12'>
                        <aside>
                        <Tags/>
                        <PopularPost/>
                        </aside>

                        </div>

                           

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog