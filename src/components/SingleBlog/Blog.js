import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import HeroNews from '../Blogs/HeroNews';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import HomeOneHeader from '../HomeOne/HomeOneHeader';
import Drawer from '../Mobile/Drawer';
import SingleBlog from './SingleBlog';
function Blog() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
          <div className="singleblog_wrapper">
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeOneHeader action={drawerAction.toggle} />
            <HeroNews
                title="Blog"
                breadcrumb={[
                    { link: '/', title: 'home' },
                    { link: '/blogs', title: 'Bloglar' },
                    { link: '/blogs/blog/:id', title: 'Blog' },
                ]}
            />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <SingleBlog />
                        </div>
                        {/* <div className="col-lg-4 col-md-5">
                            <BlogSideBar />
                        </div> */}
                    </div>
                </div>
            </section>
            <FooterHomeOne />
            <BackToTop />
          </div>
        </>
    );
}

export default Blog;