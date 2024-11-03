import { useState } from 'react';
import QRCode from 'react-qr-code';

export default function SearchPage() {
    const [text, setText] = useState('');

    // Update the text state when the input changes
    function generate(e) {
        setText(e.target.value);
    }

    return (
        <>
            <div className="bg-slate-800 flex flex-col space-y-4 h-screen justify-center items-center">
                <div className='flex space-x-4 items-center'>
                    <h1 className='text-blue-500 text-3xl'>QRCODE</h1>
                </div>
                <div className='bg-slate-700 rounded-full w-64 h-64 flex items-center justify-center'>
                    <div className='bg-white p-4 rounded-md'>
                        <QRCode value={text} size={180} /> {/* Use text as QR code value */}
                    </div>
                </div>
                <div className='border-2 border-blue-500 bg-gray-900 p-1 flex justify-between rounded-lg'>
                    <input
                        className='p-2 w-1/2 bg-gray-900 border-none outline-none text-white'
                        type="text"
                        placeholder='Enter URL'
                        value={text}
                        onChange={generate} // Call the generate function on input change
                    />
                </div>
            </div>
        </>
    );
}
