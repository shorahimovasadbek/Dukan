import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import HomeOneHeader from '../HomeOne/HomeOneHeader';
import Drawer from '../Mobile/Drawer';
import AllBlogs from './AllBlogs';
import BlogSideBar from './BlogSideBar';
import HeroNews from './HeroNews';
import { useTranslation } from 'react-i18next';

function Blogs({darkMode}) {
    const {t} = useTranslation()
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
          <div className="blogs_wrapper">
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeOneHeader
                action={drawerAction.toggle}
                color={'black'}
            />
            <HeroNews
                title={t("blogs")}
                breadcrumb={[
                    { link: '/', title: t("boshsahifaga") },
                    { link: '#', title: t("blogs") },
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