import React from 'react';
import { useGetBooksQuery } from './booksApi';

export default function BooksList() {
    const { data: books, error, isLoading } = useGetBooksQuery();

    if (isLoading) return <p className="text-blue-500">Завантаження...</p>;
    if (error) return <p className="text-red-500">Помилка завантаження даних</p>;

    return (
        <div className="max-w-5xl mx-auto p-6 text-center">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Таблиця книг</h1>
            <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                    <tr>
                        <th className="py-3 px-4 text-left">ID</th>
                        <th className="py-3 px-4 text-left">Назва</th>
                        <th className="py-3 px-4 text-left">Автор</th>
                        <th className="py-3 px-4 text-left">Дата створення</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map((book) => (
                        <tr key={book.id} className="border-b hover:bg-gray-100 transition">
                            <td className="py-2 px-4 font-mono text-gray-700">{book.id}</td>
                            <td className="py-2 px-4 font-semibold text-indigo-700">{book.title}</td>
                            <td className="py-2 px-4 text-gray-700">{book.author}</td>
                            <td className="py-2 px-4 text-gray-500">
                                {new Date(book.createdAt).toLocaleString()}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
