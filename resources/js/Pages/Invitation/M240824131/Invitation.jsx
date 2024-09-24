import { Head, usePage } from "@inertiajs/react";

export default function Invitation({ auth }) {
    const { invitation, flash } = usePage().props;
    return (
        <main className="bg-red-500">
            <Head title="Invitation" />
            <header className="w-full mx-auto flex flex-col items-center justify-center h-screen bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply space-y-14">
                <h1 className="text-white text-lg">Happy Wedding's Day!</h1>
                <div className="text-center space-y-2">
                    <ul className="font-bold text-3xl text-white">
                        {
                            invitation.couple.length > 1 ? (
                                invitation.couple.map((couple, index) =>
                                    <li key={index}>
                                        {index > 0 && (
                                            <span>&<br /></span>
                                        )}
                                        {couple.fullname}
                                    </li>
                                )
                            ) : (
                                <span>Fulan & Fulanah</span>
                            )
                        }
                    </ul>
                    <p className="text-white">{invitation.time.marriage}</p>
                </div>
                <button type="button" onClick={() => document.getElementById('content').scrollIntoView({ behavior: 'smooth' })} className="text-white border border-white hover:bg-white hover:text-gray-900 transition-all ease-in-out px-4 py-2.5">Buka Undangan</button>
            </header>
            <section id="content" className="h-screen p-8">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea placeat animi enim nesciunt eos ipsa explicabo mollitia similique maxime, excepturi perferendis omnis eaque? Eaque voluptatum delectus, pariatur quos sit odit! Quo reiciendis sequi, explicabo ullam distinctio delectus! Quae eveniet a praesentium repellendus soluta doloremque molestiae vitae ipsum, sint temporibus ullam laudantium distinctio consequatur animi assumenda nihil, possimus repellat eaque harum aperiam, amet saepe pariatur omnis? Ex eveniet ipsam ipsum amet omnis molestiae, facilis expedita sapiente possimus labore incidunt quae aspernatur optio modi obcaecati fugiat quasi! Laboriosam quibusdam sed, sit beatae quisquam dicta ullam error assumenda. Beatae, ipsam! Debitis eum sapiente vel, dolor itaque tempore consequatur atque animi inventore, earum consequuntur aliquam quam sed aut eius laudantium ab. Commodi dolore neque molestiae inventore. Ea quidem tempora aut nam, beatae itaque aliquid illo ipsa, at dicta sunt veniam, tenetur in dolores eaque inventore. Nostrum assumenda, impedit repudiandae inventore molestias eveniet, quia eius dignissimos fugiat neque voluptate quod magnam similique voluptatibus quas itaque incidunt omnis numquam doloribus facere vitae, aperiam sequi! Quo, repellat! Nesciunt assumenda mollitia adipisci ab rem atque, nihil deleniti eos quaerat aut qui aliquid consequuntur non repellat quisquam, earum necessitatibus unde, fuga dolorum facilis. Consectetur cum fuga modi id?</p>
            </section>
        </main>
    );
}
