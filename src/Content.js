import React, { useState } from 'react';
import image from "./images/Coding workshop-amico.png";
import image2 from "./images/UI-UX team-amico.png";
import image3 from "./images/Programming-bro.png";
import image4 from "./images/Designer life-bro.png";
import image5 from "./images/Hidden mining-amico.png";

export default function Content() {
    const postData = [
        { id: 1, title: 'FRONT END', body: "A front-end developer is a person who creates websites and web applications The difference between front-end and back-end He carries out all client instructions. The primary languages for front-end development are HTML, CSS, and JavaScript", img: image },
        { id: 2, title: 'UX & UI', body: "ux refers to the screens, buttons, toggles, icons, and other visual elements that you interact with when using a website, app, or other electronic device. UX refers to the entire interaction you have with a product, including how you feel about the interaction", img: image2 },
        { id: 3, title: 'BACK END', body: "back-end refers to the separation of concerns between the presentation layer and the data access layer of a piece of software, or the physical infrastructure or hardware", img: image3 },
        { id: 4, title: 'graphic design', body: "Graphic design is “the art and practice of planning and presenting ideas and experiences using visual elements. In simple terms, graphic designers create images to communicate a specific message", img: image4 },
        { id: 5, title: 'cyber security', body: "The goal of computer security includes protecting information and property from theft, corruption, or natural disasters, while allowing the information and property to remain productive and accessible to its users.", img: image5 },
    ];

    const [selectedCategory, setSelectedCategory] = useState('FRONT END');

    const ListPostData = postData.filter((post) =>
        selectedCategory ? post.title === selectedCategory : true
    );

    return (
        <>
        
        {/* عرض البيانات */}
        <div className="Posts">
            {ListPostData.map((post) => (
                <div key={post.id} className="PostItem">
                    <div className='PostContent'>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    </div>
                    <img src={post.img} alt={post.title} />
                </div>
            ))}
             {/* أزرار الفلاتر */}
            <div className="Navbar">
            <button 
                className={selectedCategory === 'FRONT END' ? 'active' : ''} 
                onClick={() => setSelectedCategory('FRONT END')}
            >
                FRONT END
            </button>
            <button 
                className={selectedCategory === 'UX & UI' ? 'active' : ''} 
                onClick={() => setSelectedCategory('UX & UI')}
            >
                UX & UI
            </button>
            <button 
                className={selectedCategory === 'BACK END' ? 'active' : ''} 
                onClick={() => setSelectedCategory('BACK END')}
            >
                BACK END
            </button>
            <button 
                className={selectedCategory === 'graphic design' ? 'active' : ''} 
                onClick={() => setSelectedCategory('graphic design')}
            >
                graphic design
            </button>
            <button 
                className={selectedCategory === 'cyber security' ? 'active' : ''} 
                onClick={() => setSelectedCategory('cyber security')}
            >
                cyber security
            </button>
        </div>
        </div>
            

        </>
    );
}

