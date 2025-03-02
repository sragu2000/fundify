import React, { useState } from 'react';
import "./image.css"
import LoadingImage from "./loading.jpg"
const Image = ({ src, className, id, alt, placeholder, onClick }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className={`relative ${className}`}> {/* Wrapper for styling */}
            {/* {!isLoaded && !hasError && (
                "Loading..."
            )} */}
            {!hasError ? (
                <img
                    src={src}
                    id={id}
                    alt={alt || "image"}
                    // loading="lazy"
                    className={`transition-opacity duration-500 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setHasError(true)}
                    onClick={onClick}
                />
            ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
                    Image Not Found!
                </div>
            )}
        </div>
    );
};

export default Image;


// import React, { useState } from 'react';
// import "./image.css"
// import LoadingImage from "./loading.jpg"
// const Image = ({ src, className, id, alt, placeholder, onClick }) => {
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [hasError, setHasError] = useState(false);

//     return (
//         <div className={`relative ${className}`}> {/* Wrapper for styling */}
//             {!isLoaded && !hasError && (
//                 <img
//                     src={placeholder || LoadingImage}
//                     alt=""
//                     className={`transition-opacity duration-500 ease-in-out ${className} fallback-image-style`}
//                 />
//             )}
//             {!hasError ? (
//                 <img
//                     src={src}
//                     id={id}
//                     alt={alt || "image"}
//                     loading="lazy"
//                     className={`transition-opacity duration-500 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
//                     onLoad={() => setIsLoaded(true)}
//                     onError={() => setHasError(true)}
//                     onClick={onClick}
//                 />
//             ) : (
//                 <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
//                     Image Not Found!
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Image;
