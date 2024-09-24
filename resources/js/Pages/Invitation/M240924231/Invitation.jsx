import { Head, usePage } from "@inertiajs/react";

export default function Invitation({ auth }) {
    const { invitation, flash } = usePage().props;

    return (
        <main>
            <Head title="Invitation" />
            <div className="p-8">
                <p className="text-sm text-gray-800">
                    Create template in here...
                </p>
            </div>
        </main>
    );
}
