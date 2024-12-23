import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import contents from './BlogContents';

function SingleBlog() {
  const location = useLocation()
  const currentLocation = location.pathname.split("/")[3]
  
  const currentBlog = contents.find(c => {
    return c.id == currentLocation
  })

    return (
        <>
            {currentBlog ? (
              <div className="single-post-area">
                <h1 className="article-title">{currentBlog.title}</h1>
                {currentBlog.beforeImg?.map((text,i) => {
                  return (
                    <p key={i}>{text}</p>
                  )
                })}
              <div className="post-thumb">
                  <img loading='lazy' src={currentBlog?.img} alt="" className='single-blog-img' />
              </div>
              {currentBlog.beforeQuote?.map((text,i) => {
                return (
                  <p key={i}>{text}</p>
                )
              })}
              <blockquote>
                  <p>
                      {currentBlog.quote}
                  </p>
              </blockquote>
              {currentBlog.afterQuote?.map((text,i) => {
                return (
                  <p key={i}>{text}</p> 
                )
              })}
            </div>
          ) : (
            <div className='d-flex align-items-center justify-content-center no_blog'>Blog mavjud emas</div>
          )}
            
            {/* <div className="comment-area">
                <h3>Comment (3)</h3>
                <ol className="comment-list">
                    <li>
                        <div className="single-comment">
                            <img src={cmnt1} alt="" />
                            <h5>
                                <a href="#">Jason Response</a>
                            </h5>
                            <span>April 03, 2019</span>
                            <div className="comment">
                                <p>
                                    He legged it bevvy mush owt to do with me such fibber fa about
                                    cup of tea sloshed morish butty bubble. Butty gormless lavatory
                                    twit bits and bobs pardon you daft ummm I'm telling.
                                </p>
                            </div>
                            <a className="comment-reply-link" href="#">
                                <i className="fal fa-reply"></i>Reply
                            </a>
                            <div className="c-border"></div>
                        </div>
                        <ul className="children">
                            <li>
                                <div className="single-comment">
                                    <img src={cmnt2} alt="" />
                                    <h5>
                                        <a href="#">Sue Shei</a>
                                    </h5>
                                    <span>April 14, 2019</span>
                                    <div className="comment">
                                        <p>
                                            Super chancer cheeky bloke haggle give us a bell well
                                            mufty chinwag say bite. lavatory twit bits and bobs
                                            pardon you daft ummm I'm telling. Blatant matie boy say
                                            bugger all mate butty gormless
                                        </p>
                                    </div>
                                    <a className="comment-reply-link" href="#">
                                        <i className="fal fa-reply"></i>Reply
                                    </a>
                                    <div className="c-border"></div>
                                </div>
                            </li>
                            <li>
                                <div className="single-comment">
                                    <img src={cmnt3} alt="" />
                                    <h5>
                                        <a href="#">Douglas Lyphe</a>
                                    </h5>
                                    <span>July 27, 2020</span>
                                    <div className="comment">
                                        <p>
                                            Oxford baking cakes dropped clanger fanny around
                                            vagabond amongst cor blimey guvnor. Blatant matie boy
                                            say bugger all mate butty gormless lavatory twit bits
                                            and bobs pardon you daft ummm I'm telling.
                                        </p>
                                    </div>
                                    <a className="comment-reply-link" href="#">
                                        <i className="fal fa-reply"></i>Reply
                                    </a>
                                    <div className="c-border"></div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
            <div className="comment-form-area">
                <h3>Post a Comment</h3>
                <p>Your email address will not be published. Required fields are marked</p>
                <div className="comment-form">
                    <form className="row" action="#" method="post">
                        <div className="col-md-6">
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="col-md-6">
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="col-md-12">
                            <input type="url" name="url" placeholder="Website" />
                        </div>
                        <div className="col-md-12">
                            <div className="save-comment">
                                <input id="history-name" type="checkbox" />
                                <label htmlFor="history-name">
                                    Save my name, email, and website in this browser for the next
                                    time I comment.
                                </label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <textarea placeholder="Coment"></textarea>
                        </div>
                        <div className="col-md-12">
                            <button type="submit">Post Comment</button>
                        </div>
                    </form>
                </div>
            </div> */}
        </>
    );
}

export default SingleBlog;