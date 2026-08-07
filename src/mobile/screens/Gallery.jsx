import { mobilePhotos } from "#constants";
import MobileAppWrapper from "#hoc/MobileAppWrapper";
import { AppHeader } from "#mobile";
import useMobileStore from "#store/mobile";

const Gallery = () => {
    const { stack, pushScreen } = useMobileStore();
    const activePhoto = mobilePhotos.find((photo) => photo.id === stack.at(-1));

    if (activePhoto) {
        return (
            <>
                <AppHeader title={activePhoto.name} />

                <div className="app-body viewer">
                    <img src={activePhoto.src} alt={activePhoto.name} />
                </div>
            </>
        );
    }

    return (
        <>
            <AppHeader title="Gallery" subtitle={`${mobilePhotos.length} photos`} />

            <div className="app-body">
                <ul className="photo-grid">
                    {mobilePhotos.map((photo) => (
                        <li key={photo.id}>
                            <button type="button" onClick={() => pushScreen(photo.id)} aria-label={photo.name}>
                                <img src={photo.src} alt={photo.name} loading="lazy" />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const GalleryScreen = MobileAppWrapper(Gallery, 'gallery');

export default GalleryScreen;
