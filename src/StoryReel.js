import React from 'react';
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://www.adweek.com/wp-content/uploads/2018/06/Instagram-Your-Story-Send-To.png"  
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5837EeYernc7eCuG4Xfpb0aQ9r3gV-KhV5Q&amp;usqp=CAU"
                title="Tina Raheja"
            />
            <Story
                image="https://www.suebzimmerman.com/wp-content/uploads/2020/03/Instagram-Story-creative-elements.jpg"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&amp;usqp=CAU"
                title="Rafeh gazi"
            />
            <Story
                image="https://www.reshiftmedia.com/wp-content/uploads/2018/02/Facebook-story.png"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H_UH6mwoziJ_33d0CRJ6GNE4qZqIXOhgBQ&amp;usqp=CAU"
                title="Frankie Dsouza"
            />
            <Story
                image="https://bloggingwizard.com/wp-content/uploads/2018/04/Type-Mode-Ways-To-Use-Instagram-Stories.png"
                profileSrc="https://i.pinimg.com/originals/2e/2f/ac/2e2fac9d4a392456e511345021592dd2.jpg"
                title="Aron Bernath"
            />
            <Story
                image="https://cdn.skedsocial.com/app/uploads/2018/07/25201714/Template-576x1024.png"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrE24tmA8kKfjWx_4KctVO5MMtO2gyvDNdCQ&amp;usqp=CAU"
                title="Nazz"
            />
        </div>
    )
}

export default StoryReel;


