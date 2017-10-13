import { DataLayer } from './../data.layer';
import { SnapshotInfo, NameValue, ReportInfo } from '../models';
import { AngularFireDatabase } from 'angularfire2/database';

export class SnapshotDAL {
    PATH: string = "/snapshots";
    constructor(private DL: DataLayer, private af: AngularFireDatabase) { }

    public Load(keyDay: number) {
        this.af.list(this.PATH, ref => {
            return ref.orderByChild(this.DL.KEYDAY).equalTo(keyDay);
        }).snapshotChanges().first().subscribe(snapshots => {
            this.DL.Snapshots = new Array<SnapshotInfo>();
            snapshots.forEach(snapshot => {
                let info: SnapshotInfo = snapshot.payload.val();
                info.key = snapshot.key;
                this.DL.Snapshots.push(info);
            });
        });
    }

    public Save(item: SnapshotInfo) {
        if (item.key)
            this.af.list(this.PATH).update(item.key, item);
        else
            this.af.list(this.PATH).push(item);
    }
}