import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className=" py-5 mt-5">

      <div className="container">
                <div className="row border-danger border-bottom">
                            <div className=" logo-footer">
                  <Image src="/images/logo-footer.png" alt="Sud Ouest" width={140} height={40} />
                </div>
        </div>

        {/* Main Footer Content */}
        <div className="row py-5">
          {/* Contenus Column */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold text-uppercase mb-3">Contenus</h6>
            <ul className="list-unstyled">
              <li className="mb-1"><Link href="/archives" className="text-decoration-none text-dark small">Archives</Link></li>
              <li className="mb-1"><Link href="/horoscope" className="text-decoration-none text-dark small">Horoscope</Link></li>
              <li className="mb-1"><Link href="/jeux" className="text-decoration-none text-dark small">Jeux</Link></li>
              <li className="mb-1"><Link href="/contenus-partenaires" className="text-decoration-none text-dark small">Contenus partenaires</Link></li>
              <li className="mb-1"><Link href="/annuaire" className="text-decoration-none text-dark small">Annuaire</Link></li>
              <li className="mb-1"><Link href="/documentaires" className="text-decoration-none text-dark small">Documentaires</Link></li>
              <li className="mb-1"><Link href="/enquetes-reportage" className="text-decoration-none text-dark small">Enquêtes et reportage</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold text-uppercase mb-3">Services</h6>
            <ul className="list-unstyled">
              <li className="mb-1"><Link href="/avis-deces" className="text-decoration-none text-dark small">Avis de décès</Link></li>
              <li className="mb-1"><Link href="/emploi" className="text-decoration-none text-dark small">Emploi</Link></li>
              <li className="mb-1"><Link href="/boutique" className="text-decoration-none text-dark small">Boutique Sud Ouest</Link></li>
              <li className="mb-1"><Link href="/journal-anniversaire" className="text-decoration-none text-dark small">Journal anniversaire</Link></li>
              <li className="mb-1"><Link href="/photos-collectors" className="text-decoration-none text-dark small">Photos collectors</Link></li>
              <li className="mb-1"><Link href="/immobilier" className="text-decoration-none text-dark small">Immobilier</Link></li>
              <li className="mb-1"><Link href="/annonces-legales" className="text-decoration-none text-dark small">Annonces légales</Link></li>
              <li className="mb-1"><Link href="/programme-tv" className="text-decoration-none text-dark small">Programme TV</Link></li>
            </ul>
          </div>

          {/* Autres titres du groupe Column */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold text-uppercase mb-3">Autres titres du groupe</h6>
            <ul className="list-unstyled">
              <li className="mb-1"><Link href="/charente-libre" className="text-decoration-none text-dark small">Charente Libre</Link></li>
              <li className="mb-1"><Link href="/republique-pyrenees" className="text-decoration-none text-dark small">La République des Pyrénées</Link></li>
              <li className="mb-1"><Link href="/dordogne-libre" className="text-decoration-none text-dark small">Dordogne Libre</Link></li>
              <li className="mb-1"><Link href="/haute-gironde" className="text-decoration-none text-dark small">Haute Gironde</Link></li>
              <li className="mb-1"><Link href="/depeche-bassin" className="text-decoration-none text-dark small">La Dépêche du Bassin</Link></li>
              <li className="mb-1"><Link href="/resistant" className="text-decoration-none text-dark small">Le Résistant</Link></li>
              <li className="mb-1"><Link href="/eclair" className="text-decoration-none text-dark small">L'Eclair</Link></li>
              <li className="mb-1"><Link href="/terre-vins" className="text-decoration-none text-dark small">Terre de Vins</Link></li>
              <li className="mb-1"><Link href="/rustica" className="text-decoration-none text-dark small">Rustica</Link></li>
              <li className="mb-1"><Link href="/resolution" className="text-decoration-none text-dark small">Résolution</Link></li>
              <li className="mb-1"><Link href="/sud-ouest-jeux" className="text-decoration-none text-dark small">Sud Ouest Jeux</Link></li>
              <li className="mb-1"><Link href="/rufus" className="text-decoration-none text-dark small">Rufus</Link></li>
            </ul>
          </div>

          {/* Espace particuliers Column */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold text-uppercase mb-3">Espace particuliers</h6>
            <ul className="list-unstyled">
              <li className="mb-1"><Link href="/abonnement" className="text-decoration-none text-dark small">Abonnement Sud Ouest</Link></li>
              <li className="mb-1"><Link href="/faq" className="text-decoration-none text-dark small">FAQ</Link></li>
              <li className="mb-1"><Link href="/mon-compte" className="text-decoration-none text-dark small">Mon compte</Link></li>
              <li className="mb-1"><Link href="/kiosque" className="text-decoration-none text-dark small">Le Kiosque</Link></li>
              <li className="mb-1"><Link href="/club-abonnes" className="text-decoration-none text-dark small">Club abonnés</Link></li>
              <li className="mb-1"><Link href="/contact" className="text-decoration-none text-dark small">Contactez-nous</Link></li>
            </ul>
          </div>

          {/* Right Side - Newsletter & Apps */}
          <div className="col-lg-4 col-md-12">
            {/* Newsletter Section */}
            <div className="mb-4">
              <h6 className="fw-bold text-uppercase mb-3">Newsletter</h6>
              <Link href="/newsletter" className="text-decoration-none text-dark small">Recevoir nos newsletters</Link>
            </div>

            {/* Mobile Apps Section */}
            <div className="mb-4">
              <h6 className="fw-bold text-uppercase mb-3">Applications mobiles</h6>
              <div className="d-flex flex-column">
                <Link href="/android" className="text-decoration-none text-dark small mb-1">Android</Link>
                <Link href="/ios" className="text-decoration-none text-dark small">iOS</Link>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="d-flex gap-3 mb-4">
              <Link href="#" className="text-danger fs-5">
                <i className="fab fa-tiktok"></i>
              </Link>
              <Link href="#" className="text-danger fs-5">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#" className="text-danger fs-5">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#" className="text-danger fs-5">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" className="text-danger fs-5">
                <i className="fab fa-snapchat-ghost"></i>
              </Link>
              <Link href="#" className="text-danger fs-5">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="row mt-4">
          {/* Thématiques */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold text-uppercase mb-3">Thématiques</h6>
            <ul className="list-unstyled">
              <li className="mb-1"><Link href="/international" className="text-decoration-none text-dark small">International</Link></li>
              <li className="mb-1"><Link href="/politique" className="text-decoration-none text-dark small">Politique</Link></li>
              <li className="mb-1"><Link href="/faits-divers" className="text-decoration-none text-dark small">Faits-divers</Link></li>
              <li className="mb-1"><Link href="/sante" className="text-decoration-none text-dark small">Santé</Link></li>
              <li className="mb-1"><Link href="/societe" className="text-decoration-none text-dark small">Société</Link></li>
              <li className="mb-1"><Link href="/sport" className="text-decoration-none text-dark small">Sport</Link></li>
              <li className="mb-1"><Link href="/economie" className="text-decoration-none text-dark small">Économie</Link></li>
              <li className="mb-1"><Link href="/culture" className="text-decoration-none text-dark small">Culture</Link></li>
              <li className="mb-1"><Link href="/tourisme" className="text-decoration-none text-dark small">Tourisme</Link></li>
              <li className="mb-1"><Link href="/gastronomie" className="text-decoration-none text-dark small">Gastronomie</Link></li>
            </ul>
          </div>

          {/* Audiovisuel */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold text-uppercase mb-3">Audiovisuel</h6>
            <ul className="list-unstyled">
              <li className="mb-1"><Link href="/digisition" className="text-decoration-none text-dark small">Digisition</Link></li>
              <li className="mb-1"><Link href="/ecrans-du-monde" className="text-decoration-none text-dark small">Écrans du monde</Link></li>
              <li className="mb-1"><Link href="/tv7" className="text-decoration-none text-dark small">TV7</Link></li>
              <li className="mb-1"><Link href="/tvpi" className="text-decoration-none text-dark small">TVPi</Link></li>
              <li className="mb-1"><Link href="/gl-tv" className="text-decoration-none text-dark small">GL TV</Link></li>
              <li className="mb-1"><Link href="/reptv" className="text-decoration-none text-dark small">La RepTV</Link></li>
            </ul>
          </div>

          {/* Sites du groupe */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold text-uppercase mb-3">Sites du groupe</h6>
            <ul className="list-unstyled">
              <li className="mb-1"><Link href="/groupe-sud-ouest" className="text-decoration-none text-dark small">Groupe du Sud Ouest</Link></li>
              <li className="mb-1"><Link href="/cote-ouest" className="text-decoration-none text-dark small">Côte Ouest</Link></li>
              <li className="mb-1"><Link href="/editions-sud-ouest" className="text-decoration-none text-dark small">Éditions Sud Ouest</Link></li>
              <li className="mb-1"><Link href="/ellerit" className="text-decoration-none text-dark small">Ellerit</Link></li>
              <li className="mb-1"><Link href="/sud-ouest-publicite" className="text-decoration-none text-dark small">Sud Ouest Publicité</Link></li>
            </ul>
          </div>

          {/* Résultats */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold text-uppercase mb-3">Résultats</h6>
            <ul className="list-unstyled">
              <li className="mb-1"><Link href="/elections" className="text-decoration-none text-dark small">Élections</Link></li>
              <li className="mb-1"><Link href="/bac-brevet" className="text-decoration-none text-dark small">Bac & Brevet</Link></li>
            </ul>
          </div>

          {/* Espace pro */}
          <div className="col-lg-4 col-md-12">
            <h6 className="fw-bold text-uppercase mb-3">Espace pro</h6>
            <ul className="list-unstyled">
              <li className="mb-1"><Link href="/abonnement-pro" className="text-decoration-none text-dark small">Abonnement pro</Link></li>
              <li className="mb-1"><Link href="/archives-pro" className="text-decoration-none text-dark small">Archives pro</Link></li>
            </ul>
          </div>
        </div>

        {/* Plan du site */}
        <div className="row mt-4">
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold text-uppercase mb-3">Plan du site</h6>
            <ul className="list-unstyled">
              <li className="mb-1"><Link href="/index-communes" className="text-decoration-none text-dark small">Index des communes</Link></li>
              <li className="mb-1"><Link href="/index-rubriques" className="text-decoration-none text-dark small">Index des rubriques</Link></li>
              <li className="mb-1"><Link href="/articles-2011" className="text-decoration-none text-dark small">Articles depuis 2011</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold text-uppercase mb-3">Sud Ouest et vous</h6>
            <ul className="list-unstyled">
              <li className="mb-1"><Link href="/debats" className="text-decoration-none text-dark small">Débats</Link></li>
              <li className="mb-1"><Link href="/evenements" className="text-decoration-none text-dark small">Événements</Link></li>
              <li className="mb-1"><Link href="/panel" className="text-decoration-none text-dark small">Panel</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Links */}
        <div className="row mt-5 pt-4 border-top">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">
              <Link href="/cgu" className="text-decoration-none text-muted small">CGU</Link>
              <Link href="/cgv" className="text-decoration-none text-muted small">CGV</Link>
              <Link href="/donnees-personnelles" className="text-decoration-none text-muted small">Données personnelles</Link>
              <Link href="/cookies" className="text-decoration-none text-muted small">Cookies</Link>
              <Link href="/gerer-utic" className="text-decoration-none text-muted small">Gérer UTIC</Link>
              <Link href="/mentions-legales" className="text-decoration-none text-muted small">Mentions légales</Link>
              <Link href="/qui-sommes-nous" className="text-decoration-none text-muted small">Qui sommes nous ?</Link>
              <Link href="/nos-flux-rss" className="text-decoration-none text-muted small">Nos flux rss</Link>
            </div>
            <div className="text-center">
              <p className="text-muted small mb-0">© www.sudouest.fr 2025</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;