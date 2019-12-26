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
    'Japan'
]


const CVWorkloadSpecification = function () {

}

const CVPublicationSpecification = function (publications) {


    switch (publications.category) {


        case 'local_journal_association':
        case 'local_journal_society':
        case 'local_journal_university':
        case 'local_journal_research_institute':
            if (publications.authorship == 'sole' || publications.authorship === 'major') {

                return 3.5 // score for major authorhip
            }

            if (publications.authorship === 'minor') {
                return 2.5 // score for minor authorhip
            }

        case 'local_journal_faculty':
        case 'local_journal_college':
        case 'local_journal_department':
            if (publications.authorship == 'sole' || publications.authorship === 'major') {
                return 2.0 // score for major authorhip
            }

            if (publications.authorship === 'minor') {
                return 1.4 // score for minor authorhip
            }

        case 'local_journal_fce':
        case 'local_journal_poly':
        case 'local_journal_monotechnic':
            if (publications.authorship == 'sole' || publications.authorship === 'major') {
                return 0.0 // score for major authorhip
            }

            if (publications.authorship === 'minor') {
                return 0.0 // score for minor authorhip
            }




        case 'foreign_journal_gradeA':

            if (publications.volume >= 25) {

                if (publications.authorship == 'sole' || publications.authorship === 'major') {

                    return 4.0;
                }
 
                if (publications.authorship === 'minor') {
                    return 2.8 // score for minor authorhip
                }

            } else return 0;




        case 'foreign_journal_gradeB':

            if (publications.volume >= 1 && publications.volume <= 24) {

                if (publications.authorship == 'sole' || publications.authorship === 'major') {
                    return 3.5 // score for major authorhip
                }

                if (publications.authorship === 'minor') {
                    return 2.5 // score for minor authorhip
                }

            } else {
                return 0;
            }






        case 'foreign_journal_gradeC':


            if (publications.volume >= 25) {

                if (publications.authorship == 'sole' || publications.authorship === 'major') {
                    return 3.5 // score for major authorhip
                }

                if (publications.authorship === 'minor') {
                    return 2.5 // score for minor authorhip
                }

            } else return 0;




        case 'foreign_journal_gradeD':

            if (publications.volume >= 1 && publications.volume <= 24) {

                if (publications.authorship == 'sole' || publications.authorship === 'major') {
                    return 1.5 // score for major authorhip
                }

                if (publications.authorship === 'minor') {
                    return 1.1 // score for minor authorhip
                }

            } else return 0;




        case 'conference_paper_peer-reviewed-proceedings':
            if (publications.authorship == 'sole' || publications.authorship === 'major') {
                return 1.5 // score for major authorhip
            }

            if (publications.authorship === 'minor') {
                return 1.1 // score for minor authorhip
            }


        case 'books':

            if (publications.authorship == 'sole' || publications.authorship === 'major') {
                return 5.0 // score for major authorhip
            }

            if (publications.authorship === 'minor') {
                return 3.5 // score for minor authorhip
            }


        case 'chatpers_in_books':
            if (publications.authorship == 'sole' || publications.authorship === 'major') {
                return 1.0 // score for major authorhip
            }
            if (publications.authorship === 'minor') {
                return 1.0 // score for minor authorhip

            }


        case 'patent_and_certified_invention':
            if (publications.authorship == 'sole' || publications.authorship === 'major') {
                return 4.0 // score for major authorhip
            }
            if (publications.authorship === 'minor') {
                return 3.5 // score for minor authorhip
            }


        case 'documented_exhibition_or_creative_work':
            if (publications.authorship == 'sole' || publications.authorship === 'major') {
                return 4.0 // score for major authorhip
            }
            if (publications.authorship === 'minor') {
                return 3.5 // score for minor authorhip
            }

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

    const __table__ = ScoreTemplate();
    __table__['sn'] = "*";  // modify later
    __table__['title-of-paper'] = pub.title;  // modify later
    __table__['outlet-of-paper'] = "outlet";  // modify later
    __table__['category-of-outlet'] = pub.category; // modify later
    __table__['authorship'] = pub.authorship //major or minor authorship
    __table__["score"] = CVPublicationSpecification(pub);
    __table__['quality-score-on-paper'] = "Quality Score";  // modify later
    __table__['score-as-factor-of-outlet-and-quality'] = "category";  // modify later
    __table__['remark'] = "";  // the remark for grading the publications like that 

    return __table__;
}



/****
 * pub : This is the publications the user submitted to the database found under the document.cv
 * The publications can be gotten by supplying the 'publications' index to the get all the publications 
 */
let CVGradingHandler = function (document, spNumber , response) {

    console.log("Grading Mode Activated here ... ");

    function CVGradingHandler() { }

    /**
     * the books is from the publications section of the document.cv submitted 
     * 
     * */
    CVGradingHandler.prototype.Books = function (pub) {
        return ScoreTable(pub);
    }


    CVGradingHandler.prototype.JournalArticlesInPrint = function (pub) {
        return ScoreTable(pub);

    }


    CVGradingHandler.prototype.ArticleAcceptedForPublicationInPress = function (pub) {
        return ScoreTable(pub);

    }

    CVGradingHandler.prototype.BookArticleOrChapter = function (pub) {
        return ScoreTable(pub);

    }

    CVGradingHandler.prototype.EditedConferenceProceedings = function (pub) {
        return ScoreTable(pub);

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
            resolve(ACADEMIC_STAFF_CV_GRADDER.JournalArticlesInPrint(document.cv.masterFormGroupings.publications.artInP))
        });


        const p2 = new Promise(function (resolve, reject) {
            resolve(ACADEMIC_STAFF_CV_GRADDER.Books(document.cv.masterFormGroupings.publications.books));
        });


        const p3 = new Promise(function (resolve, reject) {
            resolve(ACADEMIC_STAFF_CV_GRADDER.EditedConferenceProceedings(document.cv.masterFormGroupings.publications.editedConf))
        });


        const p4 = new Promise(function (resolve, reject) {
            resolve(ACADEMIC_STAFF_CV_GRADDER.BookArticleOrChapter(document.cv.masterFormGroupings.publications.bookArticlesOrChapter))
        });

        const OVERALL_GRADING = Promise.all([p1, p2, p3, p4]);

        console.log("Overall Grading :::: ", OVERALL_GRADING);
        
        OVERALL_GRADING.then(function(resolved) {

            console.log("Grading was successful...");

            console.log(resolved[0])
            console.log(resolved[1])
            console.log(resolved[2])
            console.log(resolved[3])

            response.status(200).send({message : "The grading server successfully graded the publications of " + spNumber });
            return;

        }).catch(function reject(resean) {
            response.status(500).send({message : "Failed to grade Currivulum Vitae at the moment" + spNumber });
        });

    } catch (error) {

        console.log("ERROR_OCCURRED  ::: " + error);

        response.status(500).send({ errorMsg: "Server Error occurred from the grading server" });

    }


}

module.exports = { 

    CVGradingHandler

}


