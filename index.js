const tileContent = {
    "Bilder optimal einsetzen": `
        <p>
            Heutzutage wird auf Webseiten häufig umfangreiches Bildmaterial verwendet, um Textaussagen zu verstärken und Inhalte sowie Emotionen zu vermitteln, die Worte allein nicht so direkt transportieren können. Der Einsatz von Bildern eignet sich hervorragend, um die Bindung der Besucher an die Webseite zu erhöhen. Sie dienen der Auflockerung, erzeugen Spannung und steigern die Aufmerksamkeit. Allerdings ist es meistens unbewusst, wie viel Gewichtung einzelner Bilder auf Performance und Nachhaltigkeit der Webseite entspricht. Laut <a href="https://almanac.httparchive.org/en/2019/media" target="_blank" title="Web Almanac">Web Almanac</a> beträgt die durchschnittliche Dateigröße des größten Bildes auf einer Webseite 142 Kilobyte, wobei es auf 10% aller Seiten sogar über 1 Megabyte groß ist. Damit ist das empfohlene maximale Datenvolumen von 1 Megabyte pro Seite bereits erreicht, ohne Text, Formatierungen oder zusätzliche Bilder zu berücksichtigen. Im Gegensatz dazu war die erste erstellte Webseite der Welt nur 3.363 Bytes groß. Die Optimierung bestehender Bilder ist daher der einfachste und effektivste Weg, den CO₂-Fußabdruck einer Webseite zu reduzieren.
            <div>
                <img src="InnenhofOrg.jpg" style="width: 100%;"
                    alt="Vor der Komprimierung 1 MB" />
                <label class="label">Abbildung 3 Vor der Komprimierung 1 MB</label>
                <img src="Innenhofedited.jpg" style="width: 100%;"
                    alt="Website Carbon Calculator Beispiel" />
                <label class="label">Abbildung 4 Nach der Komprimierung 548KB</label>
            </div><br>
            Die Abbildungen 3 und 4 zeigen ein Beispiel, wie die Dateigröße eines Bildes um etwa die Hälfte reduziert werden kann. Der Vorteil ist, dass die Bildqualität in beiden Abbildungen kaum beeinträchtigt wird. Für die Komprimierung wurde das Online-Tool TinyPNG verwendet. Es wird außerdem empfohlen, das Web Picture Format (WEBP) für Bilder zu nutzen, da dieses eine effiziente und <a href="https://de.siteground.com/kb/was-ist-webp/" target="_blank" title="WebP">verlustfreie</a> Komprimierung ermöglicht. Außerdem ermöglicht die Verwendung von <a href="https://de.siteground.com/kb/was-ist-webp/" target="_blank" title="WebP">WEBP</a>-Bildern mit transparentem Hintergrund und mit Animation zu erstellen.
        </p>
    `,
    "Videos achtsam einsetzen": `
        <p>
            Der weltweite Datenhunger wächst rasant, insbesondere durch den zunehmenden Konsum von Videostreaming in immer höherer Qualität. Laut einer Studie des <a href="https://www.borderstep.de/2020/07/13/videostreamingenergiebedarf-und-co2-emissionen/" target="_blank" title="Borderstep">Borderstep Instituts</a> verursacht eine Stunde Videostreaming in Full-HD-Auflösung zwischen 100 und 175 Gramm CO₂-Emissionen, abhängig vom verwendeten Endgerät. Die französische Denkfabrik <a href="https://theshiftproject.org/en/article/unsustainable-use-online-video/The" target="_blank" title="The Shift Project">The Shift Project</a> stellte 2019 fest, dass Videodaten etwa 80 % des globalen Internetverkehrs ausmachen. Diese Entwicklungen verdeutlichen den erheblichen Einfluss des Videostreamings auf den Energieverbrauch und die CO₂-Emissionen weltweit.
            Aus Sicht der Nachhaltigkeit und des Datentransfers ist es daher notwendig, Videos achtsam einzusetzen. Das Vermeiden von Autoplay-Funktionen kann den unnötigen Datenverbrauch reduzieren, da Videos nicht automatisch abgespielt werden und somit weniger Energie verbrauchen. Zudem ist die Komprimierung von Videos umweltfreundlicher, da sie die Dateigröße verringert und somit schnellere Ladezeiten ermöglicht. Dies führt zu einem geringeren Energieverbrauch bei der Datenübertragung. Es ist auch umweltschonender, den Nutzern die Möglichkeit zu bieten, Videos herunterzuladen, um wiederholtes Streaming zu vermeiden.
        </p>
    `,
    "Darkmode": `
        <p>
            Der Dunkelmodus, auch Nachtmodus genannt, wird zunehmend beliebt und ist auf vielen Geräten als Option wählbar. Im Dunkelmodus sind Hintergründe dunkel und Texte hell, was auf OLED-Displays zu erheblichem Energiesparen führen kann, da schwarze Pixel ausgeschaltet bleiben. Eine Studie der <a href="https://www.counterpointresearch.com/insights/smartphone-oled-penetration-q1-2023/" target="_blank" title="Counterpoint Research">Purdue University</a> zeigt, dass der Stromverbrauch bei OLED-Geräten im Dunkelmodus um bis zu 67 % reduziert werden kann. Da der Anteil an OLED-Smartphones stetig steigt – im ersten Quartal 2023 auf 49 % – gewinnt diese Stromsparoption weiter an Bedeutung. Auch Webseiten können durch die Bereitstellung eines Dunkelmodus zur Energieeinsparung beitragen, da immer mehr Nutzer mobil surfen.
            <div>
                <img src="DarkmodeVSLightMode.png" style="width: 100%;"
                    alt="Darkmode vs Lightmode" />
                <label class="label">Abbildung 5 Darkmode vs Lightmode</label>
            </div><br>
            Die Abbildung 5 zeigt die Umsetzung der Startseite der GreenWave-Anwendung, die sowohl den Dark Mode als auch den Light Mode veranschaulicht. Die linke Seite der Abbildung zeigt die Benutzeroberfläche im Dark Mode, bei der ein dunkler Hintergrund mit kontrastreicher heller Schrift verwendet wird, um die Augenbelastung in dunklen Umgebungen zu reduzieren. Die rechte Seite der Abbildung zeigt die Benutzeroberfläche im Light Mode mit hellem Hintergrund und dunkler Schrift, die besser für gut beleuchtete Umgebungen geeignet ist.
        </p>
    `,
    "Optimierung für Endgeräte": `
        <p>
            Um nachhaltiges Webdesign zu fördern, sollten Entwickler Webseiten so optimieren, dass sie ressourcenschonend und benutzerfreundlich auf allen Gerätetypen dargestellt werden können. Eine zentrale Methode dafür ist das Responsive Webdesign, das die Darstellung flexibel an die jeweilige Bildschirmgröße und -auflösung anpasst. So wird sichergestellt, dass Inhalte auf kleineren Smartphone-Bildschirmen genauso gut lesbar und intuitiv bedienbar sind wie auf großen Desktop-Monitoren.
            Empfehlungen für die Umsetzung:
            <ul>
            <li><strong>Mobile-First-Ansatz</strong>: Beginnen Sie mit der Gestaltung für mobile Geräte und skalieren Sie die Seite anschließend für größere Bildschirme. Dieser Ansatz eignet sich besonders, da die Mehrheit der Nutzer heute mobil auf das Web zugreift.</li>
            <li><strong>Desktop-First-Ansatz</strong>: Starten Sie bei Projekten mit komplexen Designelementen auf größeren Bildschirmen und passen Sie diese schrittweise für kleinere Displays an.</li>
            </ul>
            Durch eine kluge Wahl zwischen Mobile-First und Desktop-First können Entwickler eine ressourcenschonende Webseite schaffen, die den Datenverbrauch minimiert und die Ladezeiten verkürzt.
            <div>
                <img src="responsiveDesign.png" style="width: 100%;"
                    alt="Realisierung eines responsiven Designs" />
                <label class="label">Abbildung 6 Realisierung eines responsiven Designs</label>
            </div><br>
            Die drei Ansichten der Abbildung 6 zeigen, wie ein responsives Design für verschiedene Bildschirmgrößen realisiert wurde. Die mobile Ansicht ist kompakt, enthält jedoch die meisten Elemente der anderen Ansichten. In den Tablet- und Desktop-Ansichten wird der verfügbare Platz effizient genutzt, um die Suche und weitere Navigationselemente darzustellen.
        </p>
    `,
    "Lazy Loading": `
        <p>
            Unter <a href="https://ladezeit-optimierung.com/lexikon/lazy-loading/" target="_blank" title="Lazy Loading" >Lazy Loading</a> versteht man die Praxis, das Laden oder Initialisieren von Ressourcen oder Objekten zu verzögern, bis sie tatsächlich benötigt werden, um die Leistung zu verbessern und Systemressourcen zu sparen. Wenn eine Webseite beispielsweise ein Bild enthält, das der Benutzer erst nach unten scrollen muss, um es zu sehen, können Sie einen Platzhalter anzeigen und das vollständige Bild erst dann nachladen, wenn der Benutzer an der entsprechenden Stelle angekommen ist.
            <div>
                <img src="lazyloading.webp" style="width: 100%;"
                    alt="Realisierung Lazy Loading" />
                <label class="label">Abbildung 7 Realisierung Lazy Loading</label>
            </div><br>
            Die Abbildung 7 visualisiert die Funktionsweise von Lazy Loading auf eine Webseite. Die Inhalte der Webseite werden auf zwei Phasen geladen. Laden für die initiale Ansicht, in dieser Phase werden die Inhalte mit der blauen Markierung geladen, die für den ersten sichtbaren Bereich der Webseite erforderlich sind. Damit wird sichergestellt, dass die anfängliche Ladezeit der Seite gering bleibt und die Nutzer schnell auf die wichtigsten Inhalte zugreifen können. Bei der zweiten Phase handelt es sich um das Laden nur bei Sichtbarkeit. Hierbei werden die restlichen Inhalte, wie Bilder und andere Dateien, erst dann nachgeladen, wenn der Nutzer zu dem entsprechenden Abschnitt der Seite navigiert und dieser in den sichtbaren Bereich gelangt. Dies reduziert den Datenverbrauch und verbessert die Energieeffizienz, da nur die Inhalte geladen werden, die tatsächlich benötigt werden.
        </p>
    `,
    "Nutzung von Caching-Techniken": `
        <p>
            Caching-Techniken spielen eine entscheidende Rolle bei der Realisierung einer nachhaltigen Webseite, da sie die Effizienz und Geschwindigkeit der Datenübertragung erheblich verbessern.  Unter einem Cache ist ein Speicher, der für temporäre Daten zuständig ist. Der Vorteil davon ist, diese Daten schneller geladen werden als von ursprünglichen Speicherort. Außerdem wird mit Caching nicht nur Zeit, sondern auch Rechenleistung gespart. Somit wird kann der negative Fußabdruck einer Webseite minimiert.
            <div>
                <img src="cache.webp" style="width: 100%;"
                    alt="Beispiel für Caching" />
                <label class="label">Abbildung 8 Beispiel für <a href="https://nitropack.io/blog/post/web-caching-beginners-guide" target="_blank" title="Caching">Caching</a></label>
            </div><br>
            Die Abbildung 8 stellt die Nutzung von der Caching-Technik dar. Dabei werden Website-Ressourcen wie HTML-Dokumente, Bilder und CSS-Dateien in einem Webcache gespeichert, einer Zwischenschicht zwischen dem Server und den Nutzern. Danach werden Nutzeranfragen in der Zwischenschicht abgefangen. Wenn die angeforderten Dateien enthalten sind, werden diese Direkt geliefert, ohne den Server zu belasten.
        </p>
    `,
    "Green Web-Hosting": `
        <p>
           In der Anleitung wurde der schnellwachsende Stromverbrauch des Internets erwähnt. Daher ist die Wahl von Green Hosting ein wesentlicher Bestandteil einer nachhaltigen Webentwicklung, da es dazu beiträgt, den ökologischen Fußabdruck von Webseiten zu reduzieren, indem die Energiequelle zum Betreiben des Rechenzentrums bzw. der Webseite aus erneuerbaren Energien stammt.
        </p>
    `
};


document.addEventListener('DOMContentLoaded', function () {

    const developerTiles = document.querySelectorAll('#developers .card');
    const modalElement = document.getElementById('developerModal');
    const modalTitle = modalElement.querySelector('.modal-title');
    const modalBody = modalElement.querySelector('.modal-body');
    const modal = new bootstrap.Modal(modalElement);

    developerTiles.forEach(tile => {
        tile.addEventListener('click', function() {
            const title = tile.querySelector('.cusTitle').innerText.trim();
            const content = tileContent[title] || "<p>Kein Inhalt verfügbar.</p>";
            modalTitle.innerText = title;
            modalBody.innerHTML = content;
            modal.show();
        });
    });

    const sections = document.querySelectorAll('section');
    const bookmarkLinks = document.querySelectorAll('.bookmark-link');

    // Funktion zum Finden des am meisten sichtbaren Abschnitts
    function getCurrentSection() {
        let maxVisibleSection = null;
        let maxVisibleArea = 0;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const viewHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);

            // Berechne den sichtbaren Bereich des Abschnitts
            const visibleTop = Math.max(0, rect.top);
            const visibleBottom = Math.min(viewHeight, rect.bottom);
            const visibleArea = Math.max(0, visibleBottom - visibleTop);

            if (visibleArea > maxVisibleArea) {
                maxVisibleArea = visibleArea;
                maxVisibleSection = section;
            }
        });

        return maxVisibleSection;
    }

    // Funktion zum Aktualisieren der aktiven Lesezeichen
    function updateActiveBookmark() {
        const currentSection = getCurrentSection();

        if (currentSection) {
            bookmarkLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection.id}`) {
                    link.classList.add('active');
                }
            });
        }
    }

    // Event Listener für Scroll-Events mit Debouncing
    let scrollTimeout;
    window.addEventListener('scroll', function () {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(function () {
            updateActiveBookmark();
        });
    });

    // Initiale Überprüfung
    updateActiveBookmark();

    // Smooth Scroll für Lesezeichen-Links
    bookmarkLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    document.getElementById('generate-pdf-btn').addEventListener('click', function() {
        // Klonen des Hauptinhalts
        const mainContent = document.querySelector('main').cloneNode(true);
    
        // Anpassung des "Für Entwickler"-Abschnitts
        const developersSection = mainContent.querySelector('#developers');
    
        // Entfernen der bestehenden Kacheln
        const tileContainer = developersSection.querySelector('.row');
        tileContainer.innerHTML = '';
    
        // Hinzufügen von Titeln und Inhalten jeder Kachel
        for (const title in tileContent) {
            const titleElement = document.createElement('h3');
            titleElement.innerText = title;
            titleElement.classList.add('mt-4');
    
            const contentElement = document.createElement('div');
            contentElement.innerHTML = tileContent[title];
    
            tileContainer.appendChild(titleElement);
            tileContainer.appendChild(contentElement);
        }
    
        // PDF-Optionen festlegen
        const opt = {
            margin:       10,
            filename:     'nachhaltiges_web.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
    
        // Generieren des PDFs
        html2pdf().set(opt).from(mainContent).save();
    });
    
});
