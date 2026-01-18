export default function ClassroomRules() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="overflow-x-auto">
                <table className="table w-full bg-white shadow-xl border-t-4 border-emerald-500">
                    <thead className="bg-emerald-600 text-white">
                        <tr>
                            <th className="text-lg">Class Rules</th>
                            <th className="text-lg">Rationale</th>
                            <th className="text-lg">Consequences</th>
                            <th className="text-lg">Rewards</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg">
                        <tr className="">
                            <td>1. Make choices that help you and others learn.</td>
                            <td>Following the rules will help all learning thrive.</td>
                            <td rowSpan={5} className="align-top">
                                <ol className="list-decimal ml-4">
                                    <li>Peace corner</li>
                                    <li>Verbal warning</li>
                                    <li>Instrument time out</li>
                                    <li>Parent contact</li>
                                    <li>Referral to office</li>
                                </ol>
                            </td>
                            <td rowSpan={5} className="align-top">
                                <ol className="list-decimal ml-4">
                                    <li>Sticker</li>
                                    <li>Be among the first students to pick instruments during xylophone and ukulele lessons.</li>
                                    <li>Music shaped crayon reward</li>
                                </ol>
                            </td>
                        </tr>
                        <tr className="">
                            <td>2. Use instruments and materials with care.</td>
                            <td>Caring for instruments means that we all have working music making tools.</td>
                        </tr>
                        <tr className="">
                            <td>3. Speak, sing and play only when instructed to.</td>
                            <td>Reserving speaking, singing, and playing for when the instructor says leaves room for more music making.</td>
                        </tr>
                        <tr className="">
                            <td>4. Immediately follow all directions.</td>
                            <td>Following all rules immediately leaves room for all students to thrive in music.</td>
                        </tr>
                        <tr className="">
                            <td>5. Consider others and be kind.</td>
                            <td>Respectfulness is crucial to a positive learning environment for all.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}