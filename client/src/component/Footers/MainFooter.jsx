import React from 'react';

const MainFooter = () => {
    return (
        <footer className="bg-white border-t border-blue-100 text-gray-500">
            <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm">
                &copy; {new Date().getFullYear()} Intern Monitoring and Evaluation System.  
                Developed & engineered by{" "}
                <a
                    href="http://blackalphalabs.com/"
                    target="_blank"
                    className="text-blue-600 hover:underline font-medium"
                >
                    BlackAlphaLabs
                </a>
            </div>
        </footer>
    );
};

export default MainFooter;
