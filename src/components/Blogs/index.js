import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import HomeOneHeader from '../HomeOne/HomeOneHeader';
import Drawer from '../Mobile/Drawer';
import AllBlogs from './AllBlogs';
import BlogSideBar from './BlogSideBar';
import HeroNews from './HeroNews';

function Blogs({darkMode}) {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
          <div className="blogs_wrapper">
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeOneHeader
                action={drawerAction.toggle}
            />
            <HeroNews
                title="Bloglar"
                breadcrumb={[
                    { link: '/', title: 'home' },
                    { link: '#', title: 'Bloglar' },
                ]}
            />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7">
                            <AllBlogs />
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <BlogSideBar />
                        </div>
                    </div>
                </div>
            </section>
            <FooterHomeOne />
            <BackToTop />
          </div>
        </>
    );
}

export default Blogs;