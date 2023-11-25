export class SQLQueryBuilder {
    private query: string = '';

    public select(fields: string): SQLQueryBuilder {
        this.query += `SELECT ${fields} `;
        return this;
    }

    public from(table: string): SQLQueryBuilder {
        this.query += `FROM ${table} `
        return this;
    }

    public build(): string {
        return this.query.trim();
    }
}