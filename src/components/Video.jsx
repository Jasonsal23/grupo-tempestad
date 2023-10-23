import React from 'react';

const video1 = "https://www.youtube.com/embed/Ho5iiDSyQUA?si=z6b2LmqNtw9eY19Z";
const video2 = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FGrupoTempestadLV%2Fvideos%2F684799429791532%2F&show_text=false&width=560&t=0" 
const video3 = "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FGrupoTempestadLV%2Fvideos%2F800982664322286%2F&show_text=false&width=476&t=0" 
const video4 = "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FGrupoTempestadLV%2Fvideos%2F708200666933251%2F&show_text=false&width=476&t=0" 
export default function Video() {
    return (
        <div className= "Video">
            <h1 style={{color: '#d6481e'}}>Vídeos</h1>
            <hr />
            <br />

            <div className="youtube-videos">
                {/*<div className="video-container">
                    <iframe 
                    width="460" 
                    height="315" 
                    src="https://www.youtube.com/embed/gBCjO9BkctA?si=olrixEIQL2fqVZLL" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>    
                    </iframe>
                </div>*/}
            <div className="video-container">
            <iframe 
            width="460" 
            height="315" 
            src= {video1} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
            </iframe>
            </div>
            <div className="video-container">
                <iframe
                width="460"
                height="250"
                src= {video2}
                title="Facebook video player"
                frameborder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen>
                </iframe>
            </div>
            </div>
            <div className="facebook-videos">
                <div className="video-container">
                <iframe 
                src= {video3}
                width="460" 
                height="476" 
                title="Facebook video player" 
                frameborder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                allowFullScreen>
                </iframe>
                </div>
                <div className="video-container">
                <iframe 
                src= {video4}
                width="460" 
                height="476" 
                title= "Facebook video player"
                frameborder="0"  
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                allowFullScreen>

                </iframe>
                
                </div>
            </div>
        </div>
    )
}