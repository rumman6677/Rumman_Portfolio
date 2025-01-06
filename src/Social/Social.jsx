import React from 'react';

const Social = () => {
    return (
        <div>
            <h1 className="text-lg font-light text-gray-400 mt-6">FIND WITH ME</h1>
            <div className="flex justify-between gap-4 mt-6">
                <Link target="_blank" to="https://www.facebook.com/mdrumman.hasan.3" className="text-2xl p-4 scale-95 hover:scale-100 ease-in duration-300 rounded-md hover:shadow-slate-400 hover:shadow-inner hover:rounded-md shadow-md shadow-gray-900"><FiFacebook /></Link>
                <Link target="_blank" to="https://www.linkedin.com/in/md-rumman-hasan-46ba03328/" className="text-2xl p-4 shadow-md shadow-slate-900 rounded-md text-gray-300"><FiLinkedin /></Link>
                <Link target="_blank" to="https://www.instagram.com/rumman.dalim/" className=""><FaInstagram /></Link>
            </div>
        </div>
    );
};

export default Social;