import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import HeroNews from '../Blogs/HeroNews';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import HomeOneHeader from '../HomeOne/HomeOneHeader';
import Drawer from '../Mobile/Drawer';
import SingleBlog from './SingleBlog';
import { useTranslation } from 'react-i18next';
function Blog() {
    const {t} = useTranslation()
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
          <div className="singleblog_wrapper">
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeOneHeader action={drawerAction.toggle} color={'black'} />
            <HeroNews
                title={t("blog")}
                breadcrumb={[
                    { link: '/', title: t("boshsahifaga") },
                    { link: '/blogs', title: t("blogs") },
                    { link: '/blogs/blog/:id', title: t("blog") },
                ]}
            />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <SingleBlog />
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

export default Blog;