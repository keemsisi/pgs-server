/**
 * TEST WRITEN BY  ::: LASISI AKEEM ADESHINA
 * DATE TEST WAS WRITTEN ::: JAN 09 2020
 * LOCATION :::: FAKAM HOSTEL OLUWO
 * TIME :::: 1 : 27 : 00 AM 
 */


const { CVGradingHandler } = require('../grading-handler/AcademicStaffGrading');
const test = require('jest')


const root = new CVGradingHandler();


test('JournalArticlesInPrint testing with test data:: ', () => {
    expect(root.JournalArticlesInPrint([{}])).toBe({});
});


test('Books testing with test data:: ', () => {
    expect(root.Books([{}])).toBe({});
});


test('EditedConferenceProceedings testing with test data:: ', () => {
    expect(root.EditedConferenceProceedings([{}])).toBe({});
});


test('BookArticleOrChapter testing with test data:: ', () => {
    expect(root.BookArticleOrChapter([{}])).toBe({});
});

