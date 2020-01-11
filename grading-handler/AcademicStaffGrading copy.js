'use strict'

const PUBLICATION_POINTS = {
    'professor': 28,
    'reader': 28,
    'senior-lecturer': 28,
    'professor': 28,
    'professor': 28,
    'professor': 28,
}


const G8Countries = [
    'Germany',
    'France',
    'United Kingdom (UK)',
    'United States (US)',
    'Russia',
    'Japan',
    "Italy"
]


const CVWorkloadSpecification = function () {

}


// lf ---- means Category of the publication

const CVPublicationSpecification = function (publications) {


    switch (publications.lf) {


        case 'local_journal_association':
        case 'local_journal_society':
        case 'local_journal_university':
        case 'local_journal_research_institute':
            if (publications.authorship == 'sole' || publications.authorship === 'major') {

                return { score: 3.5, remark: 'Major journal pulication' } // score for major authorhip
            } else if (publications.authorship === 'minor') {
                return { score: 2.5, remark: 'Minor journal pulication' } // score for major authorhip

            }

        case 'local_journal_faculty':
        case 'local_journal_college':
        case 'local_journal_department':
            if (publications.authorship == 'sole' || publications.authorship === 'major') {
                return { score: 2.0, remark: 'Criteria was met' } // score for major authorhip
            } else if (publications.authorship === 'minor') {
                return { score: 1.4, remark: 'Criteria was met and the author is minor' } // score for minor authorhip
            }

        case 'local_journal_fce':
        case 'local_journal_poly':
        case 'local_journal_monotechnic':
            if (publications.authorship == 'sole' || publications.authorship === 'major') {
                return { score: 0.0, remark: 'Criteria was met' } // score for major authorhip
            }

            else if (publications.authorship === 'minor') {
                return { score: 0.0, remark: 'Publications from FCE , POLY and MONOTECNIC are Scored O' } // score for major authorhip
            }




        case 'foreign_journal_gradeA':

            if (parseInt(publications.volume) >= 25) {

                if (publications.authorship == 'sole' || publications.authorship === 'major') {

                    return { score: 4.0, remark: 'Foreign journal grade A, Major Journal' } // score for major authorhip

                }

                else if (publications.authorship === 'minor') {
                    return { score: 2.8, remark: 'Minor journal pulication , foregin journal grade A' } // score for major authorhip

                }

            } else return { score: 0.0, remark: 'the volume of the publication is not above or equal to 25' } // score for major authorhip





        case 'foreign_journal_gradeB':

            if (parseInt(publications.volume) >= 1 && parseInt(publications.volume) <= 24) {

                if (publications.authorship == 'sole' || publications.authorship === 'major') {
                    return { score: 3.5, remark: 'Major journal pulication, foreign journal Grade B' } // score for major authorhip

                }

                if (publications.authorship === 'minor') {
                    return { score: 2.5, remark: 'Minor journal pulication, foreign Journal Grade B' } // score for major authorhip

                }

            } else {
                return { score: 0.0, remark: 'the volume of the publication is not between 1 and 24' } // score for major authorhip

            }

        case 'foreign_journal_gradeC':


            if (parseInt(publications.volume) >= 25) {

                if (publications.authorship == 'sole' || publications.authorship === 'major') {
                    return { score: 3.5, remark: 'Major journal pulication, foreign journal grade C' } // score for major authorhip

                }

                if (publications.authorship === 'minor') {
                    return { score: 2.5, remark: 'Minor journal pulication , foreign journal grade C' } // score for major authorhip

                }

            } else {
                console.log(parseInt(publications.volume))
                return { score: 0.0, remark: 'the volume of the publication is not above  or equal to 25' } // score for major authorhip

            }




        case 'foreign_journal_gradeD':

            if (parseInt(publications.volume) >= 1 && parseInt(publications.volume) <= 24) {

                if (publications.authorship == 'sole' || publications.authorship === 'major') {
                    return { score: 1.5, remark: 'Major journal pulication, foreign journal grade D' } // score for major authorhip

                }

                if (publications.authorship === 'minor') {
                    return { score: 1.1, remark: 'Minor journal pulication, foreign journal Grade D' } // score for major authorhip

                }

            } else {
                return { score: 0.0, remark: 'The volume of the publication is not between 1 and 24' } // score for major authorhip

            }




        case 'conference_paper_peer_reviewed_proceedings':
            if (publications.authorship == 'sole' || publications.authorship === 'major') {
                return { score: 1.5, remark: 'contest paper peered reviewed proceedings' } // score for major authorhip

            }

            if (publications.authorship === 'minor') {
                return { score: 1.1, remark: 'Minor conference paper peer reviewed proceedings' } // score for major authorhip

            }


        case 'books':

            if (publications.authorship == 'sole' || publications.authorship === 'major') {
                return { score: 5.0, remark: 'book publication' } // score for major authorhip

            }

            if (publications.authorship === 'minor') {
                return { score: 3.5, remark: 'Minor author book publication ' } // score for major authorhip

            }


        case 'chatpers_in_books':

            if (publications.authorship == 'sole' || publications.authorship === 'major') {
                return { score: 1.0, remark: 'Major journal pulicatio' } // score for major authorhip

            }
            if (publications.authorship === 'minor') {
                return { score: 1.0, remark: 'Minor book publication , chapter in books' } // score for major authorhip


            }


        case 'patent_and_certified_invention':
            if (publications.authorship == 'sole' || publications.authorship === 'major') {
                return { score: 4.0, remark: 'Major patent and certified invention' } // score for major authorhip

            }
            if (publications.authorship === 'minor') {
                return { score: 3.5, remark: 'Minor journal pulication patent and certified invention' } // score for major authorhip
            }


        case 'documented_exhibition_or_creative_work':
            if (publications.authorship == 'sole' || publications.authorship === 'major') {
                return { score: 4.0, remark: 'Minor journal pulication, documented ehibition or creative work' } // score for major authorhip

            }
            if (publications.authorship === 'minor') {
                return { score: 3.5, remark: 'Minor journal pulication, documented exhibition or creative work' } // score for major authorhip

            }

        // grade the Academic achievement 
        case 'academic_achievement_phd':
            return 10.0;
        case 'academic_achievement_msc':
            return 4.0;
        case 'academic_achievement_bsc':
            return 0.0;
        case 'academic_achievement_msc':
            return 0.0;

        default: return 0;
    }
}


/**
 * return Object which serves as a template for the grading of each publications
 */
function ScoreTemplate() {
    return {
        "sn": "",
        "title-of-paper": "",
        "outlet-of-paper": "",
        "category-of-outlet": {
            "foreign": "",
            "local": ""
        },
        "authorship": "",
        "score": "",
        "quality-score-on-paper": "",
        "score-as-factor-of-outlet-and-quality": "",
        "remark": "" /**reson for grading the the pulication */
    }
}

/**
 * 

 *   <mat-option value="chatpers_in_books">Chapters in Books</mat-option>
                            <mat-option value="patent_and_certified_invention">Patent and Certified Invention</mat-option>
                            <mat-option value="documented_exhibition_or_creative_work">Docuemted Exhibition or Creative work</mat-option> 
 */

/**
 * 
 * @param {object} pub The Publication from the staff document.cv
 * @returns {Object} An object is returned containing the score for the publcation
 */
function ScoreTable(pub) {
    const scoreWithRemark = CVPublicationSpecification(pub);
    const __table__ = ScoreTemplate();
    __table__['sn'] = "*";  // modify later
    __table__['title-of-paper'] = pub.title;  // modify later
    __table__['outlet-of-paper'] = "outlet";  // modify later
    __table__['category-of-outlet'] = pub.lf; // modify later
    __table__['authorship'] = pub.authorship //major or minor authorship
    __table__["score"] = scoreWithRemark.score;
    __table__['quality-score-on-paper'] = "Quality Score";  // modify later
    __table__['score-as-factor-of-outlet-and-quality'] = "lf";  // modify later
    __table__['remark'] = scoreWithRemark.remark  // the remark for grading the publications like that 
    return __table__;
}



/****
 * pub : This is the publications the user submitted to the database found under the document.cv
 * The publications can be gotten by supplying the 'publications' index to the get all the publications 
 */
let CVGradingHandler = function (document, spNumber, response) {

    console.log("Grading Mode Activated here ... ");

    function CVGradingHandler() { }

    /**
     * the books is from the publications section of the document.cv submitted 
     * 
     * */
    CVGradingHandler.prototype.Books = function (pub) {
        let results = [];
        pub.forEach(p => {
            // console.log(JSON.stringify(p))
            p.lf = 'books';
            results.push(ScoreTable(p))
        });
        return results;
    }


    CVGradingHandler.prototype.JournalArticlesInPrint = function (pub) {
        let results = [];
        pub.forEach(p => {
            // console.log(JSON.stringify(p))
            results.push(ScoreTable(p))
        });
        return results;


    }


    CVGradingHandler.prototype.ArticleAcceptedForPublicationInPress = function (pub) {
        let results = [];
        pub.forEach(p => {
            // console.log(JSON.stringify(p))
            results.push(ScoreTable(p))
        });
        return results;


    }

    CVGradingHandler.prototype.BookArticleOrChapter = function (pub) {
        console.log("BOOK ARTICLE OR CHAPTER");
        let results = [];
        pub.forEach(p => {
            p.lf = 'chatpers_in_books';
            // console.log(JSON.stringify(p))
            results.push(ScoreTable(p))
        });
        return results;

    }

    CVGradingHandler.prototype.EditedConferenceProceedings = function (pub) {
        let results = [];
        pub.forEach(p => {
            // console.log(JSON.stringify(p))
            p.lf = 'conference_paper_peer_reviewed_proceedings';
            results.push(ScoreTable(p))
        });
        return results;


    }

    CVGradingHandler.prototype.ResearchInProgress = function (pub) {

        return ScoreTable(pub);

    }


    CVGradingHandler.prototype.TechnicalReport = function (aaforpub) {
        return ScoreTable(pub);

    }

    CVGradingHandler.prototype.ThesisDissertationAndProjects = function (pub) {
        return ScoreTable(pub);
    }


    try {

        const ACADEMIC_STAFF_CV_GRADDER = new CVGradingHandler();

        const p1 = new Promise(function (resolve, reject) {
            // console.log(JSON.stringify(document.artInP))
            resolve(ACADEMIC_STAFF_CV_GRADDER.JournalArticlesInPrint(document.artInP))
        });


        const p2 = new Promise(function (resolve, reject) {
            // console.log(JSON.stringify(document.books))
            resolve(ACADEMIC_STAFF_CV_GRADDER.Books(document.books));
        });


        const p3 = new Promise(function (resolve, reject) {
            // console.log(JSON.stringify(document.editedConf))
            resolve(ACADEMIC_STAFF_CV_GRADDER.EditedConferenceProceedings(document.editedConf))
        });


        const p4 = new Promise(function (resolve, reject) {
            // console.log(JSON.stringify(document.BookArticleOrChapter))
            resolve(ACADEMIC_STAFF_CV_GRADDER.BookArticleOrChapter(document.bookArticlesOrChapter))
        });


        /**
         * 
         */
        const p5 = new Promise(function (resolve, reject) {
            // console.log(JSON.stringify(document.BookArticleOrChapter))
            resolve(ACADEMIC_STAFF_CV_GRADDER.BookArticleOrChapter(document.bookArticlesOrChapter))
        });

        const p6 = new Promise(function (resolve, reject) {
            // console.log(JSON.stringify(document.BookArticleOrChapter))
            resolve(ACADEMIC_STAFF_CV_GRADDER.BookArticleOrChapter(document.bookArticlesOrChapter))
        });

        const p7 = new Promise(function (resolve, reject) {
            // console.log(JSON.stringify(document.BookArticleOrChapter))
            resolve(ACADEMIC_STAFF_CV_GRADDER.BookArticleOrChapter(document.bookArticlesOrChapter))
        });

        const p8 = new Promise(function (resolve, reject) {
            // console.log(JSON.stringify(document.BookArticleOrChapter))
            resolve(ACADEMIC_STAFF_CV_GRADDER.BookArticleOrChapter(document.bookArticlesOrChapter))
        });

        const p9 = new Promise(function (resolve, reject) {
            // console.log(JSON.stringify(document.BookArticleOrChapter))
            resolve(ACADEMIC_STAFF_CV_GRADDER.BookArticleOrChapter(document.bookArticlesOrChapter))
        });




        const OVERALL_GRADING = Promise.all([p1, p2, p3, p4]);

        console.log("Overall Grading :::: ", OVERALL_GRADING);

        OVERALL_GRADING.then(function (resolved) {

            console.log("Grading was successful...");

            console.log(resolved[0])
            console.log(resolved[1])
            console.log(resolved[2])
            console.log(resolved[3])

            const publcationGrading = {
                JournalArticlesInPrint : resolved[0] ,
                Books : resolved[1],
                EditedConferenceProceedings : resolved[2],
                BookArticleOrChapter : resolved[3]
             }

            

            response.status(200).send({ message: "The grading server successfully graded the publications of " + spNumber  , grades : publcationGrading});
            return;

        }).catch(function reject(resean) {
            response.status(500).send({ message: "Failed to grade Currivulum Vitae at the moment" + spNumber });
        });

    } catch (error) {

        console.log("ERROR_OCCURRED  ::: " + error);

        response.status(500).send({ errorMsg: "Server Error occurred from the grading server" });

    }


}

module.exports = {

    CVGradingHandler ,


}


