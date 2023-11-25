import { SQLQueryBuilder } from "./sqlQueryBuilder";

describe('[Builder - lab] SQL builder', () => {

    it('should build simple SQL query', () => {
        const query = new SQLQueryBuilder();
        const expectQuery = 'SELECT * FROM users';
        
        const sql = query.select('*').from('users').build();

        expect(sql).toEqual(expectQuery);
    });
});