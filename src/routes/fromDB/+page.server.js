
import sql from '$lib/server/database';

export async function load() {
    const rows = await sql`
    SELECT
        containernumber,
        nameofship,
        containersize,
        dateContainershipped
    FROM
        containers`;

    console.log({rows});

    return { containers: rows };
}
