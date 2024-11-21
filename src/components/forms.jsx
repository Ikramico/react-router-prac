import { useState } from 'react';

const BookForm = ({ onSubmit, existingCategories, existingWriters }) => {
    const [bookName, setBookName] = useState('');
    const [writerName, setWriterName] = useState('');
    const [category, setCategory] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newWriter, setNewWriter] = useState('');
    const [quantity, setQuantity] = useState('');
    const [purchaseRate, setPurchaseRate] = useState('');
    const [sellRate, setSellRate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookData = {
            bookName,
            writerName: newWriter || writerName,
            category: newCategory || category,
            quantity,
            purchaseRate,
            sellRate,
        };
        onSubmit(bookData);
        // Reset form after submission
        resetForm();
    };

    const resetForm = () => {
        setBookName('');
        setWriterName('');
        setCategory('');
        setNewCategory('');
        setNewWriter('');
        setQuantity('');
        setPurchaseRate('');
        setSellRate('');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Book Form</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Book Name</label>
                <input
                    type="text"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Writer Name</label>
                <select
                    value={writerName}
                    onChange={(e) => setWriterName(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                >
                    <option value="">Select a Writer</option>
                    {existingWriters.map((writer, index) => (
                        <option key={index} value={writer}>
                            {writer}
                        </option>
                    ))}
                </select>
                <div className="mt-2">
                    <input
                        type="text"
                        placeholder="Add new writer"
                        value={newWriter}
                        onChange={(e) => setNewWriter(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                >
                    <option value="">Select a Category</option>
                    {existingCategories.map((cat, index) => (
                        <option key={index} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
                <div className="mt-2">
                    <input
                        type="text"
                        placeholder="Add new category"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Purchase Rate</label>
                <input type="number"
                    value={purchaseRate}
                    onChange={(e) => setPurchaseRate(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Sell Rate</label>
                <input
                    type="number"
                    value={sellRate}
                    onChange={(e) => setSellRate(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
                Submit
            </button>
        </form>
    );
};

export default BookForm;