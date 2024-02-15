import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoUpdateComponent } from './grupo-update.component';

describe('GrupoUpdateComponent', () => {
  let component: GrupoUpdateComponent;
  let fixture: ComponentFixture<GrupoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupoUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrupoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
