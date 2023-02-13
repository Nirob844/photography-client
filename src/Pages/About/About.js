import React from 'react';
import nirob from '../../assets/images/nirob.jpeg'

const About = () => {
    return (
        <div className="my-10 flex justify-between shadow-2xl w-3/4 mx-auto">

            <div className="w-1/2 p-5">
                <h2 className="card-title font-bold my-3">About Me</h2>
                <p className='font-semibold mb-3'>I LOVE TO CAPTURE FOR SMILING...</p>
                <p>Nirob Hasan is one of the freelance commercial photographers in Bangladesh. He is passionate about his work and he's following his passion for more than 21 years. In 2001, Hasibul Hasan achieved the “Best Photographer “ award from the Drik Gallery of Bangladesh. And in 2019, he got an award from the Bangladesh Friendship Foundation and Index Media in the category of “Best Photographer 2018.” He believes in simplicity so he always tries to exhibit his works creatively in a simple way. His work includes Commercial, Advertising, Fashion & Glamour Industry, Interiors, Products, Wedding & Parties and more.</p>

            </div>
            <div>
                <figure><img
                    className="object-cover w-full h-48 rounded shadow-lg sm:h-96 pt-8"
                    src={nirob} alt="Nirob" /></figure>
            </div>
        </div>
    );
};

export default About;