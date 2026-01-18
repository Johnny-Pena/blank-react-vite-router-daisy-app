import GoTo from "../components/GoTo";

export default function Strategies() {
    return (
        <div className="min-h-screen bg-base-100 pt-16">
            <div className="max-w-4xl mx-auto p-6">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-emerald-600 mb-4">Strategies For Success</h1>
                    <p className="text-lg text-gray-600">Resources and strategies to help students succeed in music class</p>
                </div>
                <GoTo />
            </div>
        </div>
    );
}