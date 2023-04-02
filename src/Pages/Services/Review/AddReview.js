import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";



const AddReview = ({ serviceId, serviceName }) => {

    const { user } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const review = e.target.review.value;

        if (review.length < 10) {
            toast.error("Review must be at least 10 characters long");
            return;
        }

        const newReview = {
            serviceId,
            serviceName,
            review,
            name: user.displayName,
            uid: user.uid,
            image: user.photoURL,
        };

        fetch('http://localhost:5000/add-review', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newReview),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success(' successfully')
                    e.target.reset();
                }
            })
            .catch(er => console.error(er.message));

    };

    return (
        <div className="flex flex-col w-4/5 mx-auto my-5 p-8 rounded-xl bg-base-100 shadow-xl ">
            <form
                className="flex flex-col items-center w-full"
                onSubmit={handleSubmit}
            >
                <h2 className="text-3xl font-semibold text-center">
                    Your opinion matters!
                </h2>

                <div className="flex flex-col w-full">
                    <textarea
                        rows="3"
                        placeholder="Review..."
                        className="p-4 rounded-md resize-none bg-gray-200"
                        name="review"
                    ></textarea>
                    <button
                        type="submit"
                        className="btn btn-warning mt-2"
                    >
                        Leave feedback
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;