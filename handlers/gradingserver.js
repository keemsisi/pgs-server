'use strict'

var mongo = require('mongodb');
// const {db}  = require('../config/MongoDbConfig');



db.collection('users').findOne({} , function (erro , result) {
    console.log(result);
})

import { db } from "../config/MongoDbConfig";
const PUBLICATION_POINTS = {
    'professor': 28,
    'reader': 28,
    'senior-lecturer': 28,
    'professor': 28,
    'professor': 28,
    'professor': 28,
}

export const CVWorkloadSpecification = function () {
    
}

export const CVPublicationSpecification = function (publication) {
    switch (publication.category) {


        case 'local_journal_association':
        case 'local_journal_society':
        case 'local_journal_university':
        case 'local_journal_research_institute':
            if (publication.authorship == 'sole' || publication.authorship === 'major') {
                return 3.5 // score for major authorhip
            }

            if (publication.authorship === 'minor') {
                return 2.5 // score for minor authorhip
            }

        case 'local_journal_faculty':
        case 'local_journal_college':
        case 'local_journal_department':
            if (publication.authorship == 'sole' || publication.authorship === 'major') {
                return 2.0 // score for major authorhip
            }

            if (publication.authorship === 'minor') {
                return 1.4 // score for minor authorhip
            }

        case 'local_journal_fce':
        case 'local_journal_poly':
        case 'local_journal_montec':
            if (publication.authorship == 'sole' || publication.authorship === 'major') {
                return 0.0 // score for major authorhip
            }

            if (publication.authorship === 'minor') {
                return 0.0 // score for minor authorhip
            }




        case 'foreign_journal_gradeA':
            if (publication.authorship == 'sole' || publication.authorship === 'major') {
                return 4.0 // score for major authorhip
            }

            if (publication.authorship === 'minor') {
                return 2.8 // score for minor authorhip
            }


        case 'foreign_journal_gradeB':
            if (publication.authorship == 'sole' || publication.authorship === 'major') {
                return 3.5 // score for major authorhip
            }

            if (publication.authorship === 'minor') {
                return 2.5 // score for minor authorhip
            }



        case 'foreign_journal_gradeC':
            if (publication.authorship == 'sole' || publication.authorship === 'major') {
                return 3.5 // score for major authorhip
            }

            if (publication.authorship === 'minor') {
                return 2.5 // score for minor authorhip
            }


        case 'foreign_journal_gradeD':
            if (publication.authorship == 'sole' || publication.authorship === 'major') {
                return 1.5 // score for major authorhip
            }

            if (publication.authorship === 'minor') {
                return 1.1 // score for minor authorhip
            }


        case 'conference_paper_peer-reviewed-proceedings':
            if (publication.authorship == 'sole' || publication.authorship === 'major') {
                return 1.5 // score for major authorhip
            }

            if (publication.authorship === 'minor') {
                return 1.1 // score for minor authorhip
            }


        case 'books':

            if (publication.authorship == 'sole' || publication.authorship === 'major') {
                return 5.0 // score for major authorhip
            }

            if (publication.authorship === 'minor') {
                return 3.5 // score for minor authorhip
            }


        case 'chatpers-in-books':
            if (publication.authorship == 'sole' || publication.authorship === 'major') {
                return 1.0 // score for major authorhip
            }
            if (publication.authorship === 'minor') {
                return 1.0 // score for minor authorhip

            }


        case 'patent-and-certified-invention':
            if (publication.authorship == 'sole' || publication.authorship === 'major') {
                return 4.0 // score for major authorhip
            }
            if (publication.authorship === 'minor') {
                return 3.5 // score for minor authorhip
            }


        case 'documented-exhibition-or-creative-work':
            if (publication.authorship == 'sole' || publication.authorship === 'major') {
                return 4.0 // score for major authorhip
            }
            if (publication.authorship === 'minor') {
                return 3.5 // score for minor authorhip
            }

        default: return 0;
    }
}

export function TemplateScore() {
    return {
        "sn": "",
        "title-of-paper": "",
        "outlet-of-paper": "",
        "category-of-outlet": {
            "foreign": "",
            "local": ""
        },
        "authorship":"",
        "score" : "" ,
        "quality-score-on-paper": "",
        "score-as-factor-of-outlet-and-quality": ""
    }
}


/**
 * 
 * @param {object} pub The Publication from the staff CV
 * @returns {Object} An object is returned containing the score for the publcation
 */
export function ScoreTable(pub) {

        const __table__ = TemplateScore();
        __table__['sn'] = 1;  // modify later
        __table__['title-of-paper'] = pub.title;  // modify later
        __table__['outlet-of-paper'] = pub.outletOfPaper;  // modify later
        __table__['category-of-outlet'] = pub.category; // modify later
        __table__['authorship'] = pub.authorship //major or minor authorship
        __table__["score"] = CVPublicationSpecification(pub);
        __table__['quality-score-on-paper'] = pub.category;  // modify later
        __table__['score-as-factor-of-outlet-and-quality'] = pub.category;  // modify later

        return __table__;
}

export let CVGradingHandler = function (params) {
    function CVGradingHandler(staffCV) {
        Object.defineProperty
            (CVGradingHandler, 'G8Countries', {
                get: function () {
                    return [
                        'Germany', 'France', 'United Kingdom (UK)',
                        'United States (US)', 'Russia', 'Japan'
                    ]
                },
                set: function () { },
                enumerable: !0,
                configurable: true,
            });




        CVGradingHandler.prototype.BookGrader = function (book) {
            return ScoreTable(pub);
        }


        CVGradingHandler.prototype.JournalArticlesInPrint = function (jainp) {
            return ScoreTable(pub);

        }

        Object.defineProperty
            (CVGradingHandler, 'ArticleAcceptedForPublicationInPress', {
                get: function () {
                    return function (pub) {
                        return ScoreTable(pub);
                    }
                },
                set: function () { },
                enumerable: !0,
                configurable: true,
            });


        Object.defineProperty
            (CVGradingHandler, 'BookArticleOrChapter', {
                get: function () {
                    return function (pub) {
                        return ScoreTable(pub);
                    }
                },
                set: function () { },
                enumerable: !0,
                configurable: true,
            });


        Object.defineProperty
            (CVGradingHandler, 'EditedConferenceProceedings', {
                get: function () {
                    return function (pub) {
                        return ScoreTable(pub);
                    }
                },
                set: function () { },
                enumerable: !0,
                configurable: true,
            });


        Object.defineProperty
            (CVGradingHandler, 'ResearchInProgress', {
                get: function () {
                    return function (pub) {
                        return ScoreTable(pub);
                    }
                },
                set: function () { },
                enumerable: !0,
                configurable: true,
            });


        Object.defineProperty
            (CVGradingHandler, 'TechnicalReport', {
                get: function () {
                    return function (pub) {
                        return ScoreTable(pub);
                    }
                },
                set: function () { },
                enumerable: !0,
                configurable: true,
            });


        Object.defineProperty
            (CVGradingHandler, 'ThesisDissertationAndProjects', {
                get: function () {
                    return function (pub) {
                        return ScoreTable(pub);
                    }
                },
                set: function () { },
                enumerable: !0,
                configurable: true,
            });
    }
}