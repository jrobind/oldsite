window.addEventListener('load', function() {
    function App() {
        debugger;
        this.projectsSection = document.querySelector('.projects-wrap');
        this.contactsSection = document.querySelector('.contact-section');
        this.projectsLink = document.querySelector('.projects-link');
        this.contactsLink = document.querySelector('.contact-link');
        this.year = document.querySelector('#year');
        this.headerOffset = 40;

        // listeners
        this.projectsLink.addEventListener('click', this.handleScroll.bind(this));
        this.contactsLink.addEventListener('click', this.handleScroll.bind(this));
        this.projectsLink.addEventListener('keydown', this.handleScroll.bind(this));
        this.contactsLink.addEventListener('keydown', this.handleScroll.bind(this));

        window.addEventListener('resize', this.calcOffset.bind(this));

        this.calcOffset();
    }

    App.prototype.date = function() {
        var date = new Date();
        this.year.textContent = date.getFullYear().toString();
    }

    App.prototype.calcOffset = function() {
        var contactSectionPosition = this.contactsSection.offsetTop;
        var projectSectionPosition = this.projectsSection.offsetTop;
            
        this.offsetPositionContacts = contactSectionPosition - this.headerOffset;
        this.offsetPositionProjects = projectSectionPosition - this.headerOffset;         
    }

    App.prototype.handleScroll = function(e) {
        if (e.type === 'click' || e.keyCode === 13) {
            var offset = e.target === this.contactsLink ?
            this.offsetPositionContacts  : this.offsetPositionProjects;

            window.scrollTo({top: offset, behavior: "smooth"});
        }
    }

    var app = new App();

    app.date()
});
